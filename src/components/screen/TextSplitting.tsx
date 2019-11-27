import React, { ReactElement, useState } from 'react';

import { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';
import { Alert, TouchableOpacity } from 'react-native';
import Button from '../shared/Button';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  align-items: center;
  padding: 15px;
`;

const StyledTextInput = styled.TextInput`
  font-size: 16;
  color: blue;
  height: 200px;
  border-width: 0.5px;
  width: 100%;
`;

const StyeldText = styled.Text`
  font-size: 16;
  color: blue;
`;

interface Props {
  navigation: DefaultNavigationProps<'TextSplitting'>;
}

function splitText(origin: string) {
  const text = origin.replace(/[.!?]/g, s => s + '\n');
  return text.split('\n').filter(s => s != '')  
}

function Page(props: Props): ReactElement {
  const [ textValue, setTextValue ] = useState<string>(''); 
  const [ sentenseList, setSentenseList ] = useState<string[]>([''])
  return (
    <Container>
      <StyledTextInput
        testID="textInput"
        onChangeText={(text) => {
          setTextValue(text);
          setSentenseList(splitText(text));
        }}
        value={textValue}
        multiline
        />
      { 
        sentenseList.map((sentense: string, index): ReactElement => 
          (<StyeldText key={sentense+index}>{sentense.trim()}</StyeldText>)) 
      }
      <Button 
        testID="removeBtn"
        onClick={() => {
          Alert.alert('Remove All','',[
            {
              onPress: () => {
                setTextValue('')
                setSentenseList([])
              }
            },
          ])
        }}
        text="Remove All"
      />
    </Container>
  );
}

export default Page;
