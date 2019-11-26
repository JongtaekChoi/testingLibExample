import 'react-native';

import React, { ReactElement } from 'react';
import { RenderResult, act, fireEvent, render } from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import TextSplitting from '../TextSplitting';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;
let testingLib: RenderResult;

jest.mock('Alert', () => {
  return {
    alert: (title, message, buttons) => {
      buttons[0].onPress();
    }
  }
});

describe('[TextSplitting] screen', () => {
  beforeEach(() => {
    props = createTestProps({});
    component = createTestElement(<TextSplitting {...props} />);
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  it('interactions', () => {
    const input = testingLib.getByTestId('textInput');
    act(() => {
      fireEvent.changeText(input, 'I have a heart, too, HwaLan. \
      If you trample my heart like this, then I\'ll be a gangster! \
      Do I kidnap you like a gangster?');
    });
    const btn = testingLib.queryByTestId('removeBtn');
    act(() => {
      fireEvent.press(btn);
    });
  });
});
