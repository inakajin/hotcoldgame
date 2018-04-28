import React from 'react';
import { shallow } from 'enzyme';
import Feedback from './feedback';
  /** 
   * Below, we'll use the guessCount to generate a key so that React treats the feedback message 
   * as a DOM change, even when a guess does not change the feedback text.
   * This is necessary for consistent aural feedback via aria-live.
  */
  describe('<Feedback />', () => {
      it('Renders without crashing', () => {
          shallow(<Feedback />);
      });
  });

it('Renders some feedback', () => {
    let TEST_FEEDBACK = 'You are listening to a game!';
    let wrapper = shallow(<Feedback feedback={TEST_FEEDBACK} />);
    expect(wrapper.contains(TEST_FEEDBACK)).toEqual(true);
});