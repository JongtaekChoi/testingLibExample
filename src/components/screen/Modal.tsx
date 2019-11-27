import React, { ReactElement, useRef, useState } from 'react';

import { DefaultNavigationProps } from '../../types';
import styled from 'styled-components/native';
import Modal from 'react-native-modalbox';
import Button from '../shared/Button';

const Container = styled.View`
  flex: 1;
  background-color: transparent;
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
  const modal: React.MutableRefObject<Modal | null> = useRef({});
  const [cnt, setCnt] = useState(0);
  const open = (): void => {
    if (modal.current) {
      modal.current.open();
    }
  };
  const close = (): void => {
    if (modal.current) {
      setCnt(cnt + 1);
      modal.current.close();
    }
  };
  return (
    <Container>
      <StyledText>{cnt}</StyledText>
      <Button
        testID="openBtn"
        onClick={open}
        text="열기"/>
      <Modal ref={modal}>
        <Button
          testID="closeBtn"
          onClick={close}
          text="닫기"
        />
      </Modal>
    </Container>
  );
}

export default Page;
