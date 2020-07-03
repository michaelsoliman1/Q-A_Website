import React from 'react';
/* import { render } from '@testing-library/react';
 */import App from './App';
import { shallow, mount, render } from 'enzyme';



describe("Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test("render the title of counter", () => {
  });
}) 