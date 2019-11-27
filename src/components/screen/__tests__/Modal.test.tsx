import 'react-native';

import React, { ReactElement } from 'react';
import { RenderResult, render } from '@testing-library/react-native';
import { createTestElement, createTestProps } from '../../../../test/testUtils';

import Modal from '../Modal';
import renderer from 'react-test-renderer';

let props: any;
let component: ReactElement;
let testingLib: RenderResult;

describe('[Modal] screen', () => {
  beforeEach(() => {
    props = createTestProps();
    component = createTestElement(<Modal {...props} />);
    testingLib = render(component);
  });

  it('renders without crashing', () => {
    const rendered = renderer.create(component).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });

  describe('interactions', () => {
    beforeEach(() => {
      testingLib = render(component);
    });

    it('should simulate onClick', () => {
      
    });
  });
});
