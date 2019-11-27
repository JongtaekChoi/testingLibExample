import React, { ReactElement, useRef } from 'react';

import { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';
import Modal from 'react-native-modalbox';
import Button from '../shared/Button';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  font-size: 16;
  color: blue;
`;

interface Props {
  navigation: DefaultNavigationProps<'default'>;
}

function Page(props: Props): ReactElement {
  const modal: React.MutableRefObject<Modal | null>  = useRef({})
  const open = (): void => {
    if(modal.current) {
      modal.current.open();
    }
  };
  const close = (): void => {
    if(modal.current) {
      modal.current.close();
    }
  };
  return (
    <Container>
      <Button
        testID="openBtn"
        onClick={open}
        text='열기'/> 
      <Modal ref={modal}>
          <Button
            testID="closeBtn"
            onClick={close}
            text='닫기'
          />
      </Modal>
    </Container>
  );
}

export default Page;
