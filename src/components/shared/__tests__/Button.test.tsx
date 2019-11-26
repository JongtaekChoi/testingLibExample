import 'react-native';

import * as React from 'react';

import {
  RenderResult,
  act,
  fireEvent,
  render,
} from '@testing-library/react-native';

import Button from '../Button';
import { ThemeProvider } from 'styled-components/native';
import { ThemeType } from '../../../types';
import { createTheme } from '../../../theme';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

let props: any;
let component: React.ReactElement;
let testingLib: RenderResult;

const getTestComponent = (propsParam: any) : React.ReactElement => {
  return(
    <ThemeProvider theme={createTheme(ThemeType.LIGHT)}>
      <Button {...propsParam} />
    </ThemeProvider>
  )
}

describe('[Button]', () => {
  let cnt = 1;

  beforeEach(() => {
    const props = {
      onClick: (): number => cnt++,
      testID: 'btn',
    };
    component = getTestComponent(props);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component);
    expect(rendered.toJSON()).toMatchSnapshot();
    expect(rendered.toJSON()).toBeTruthy();

    rendered.update(getTestComponent({...props, isLoading: true}));
    expect(rendered.toJSON()).toMatchSnapshot();
    rendered.update(getTestComponent({...props, isDisabled: true}));
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      const btn = testingLib.queryByTestId('btn');
      act(() => {
        fireEvent.press(btn);
        fireEvent.press(btn);
      });
      expect(cnt).toBe(3);
    });
  });
});
