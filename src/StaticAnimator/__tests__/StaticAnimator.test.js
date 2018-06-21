import React from 'react';
import renderer from 'react-test-renderer';
import { View } from 'react-native';

import StaticAnimator from '../';

// FIXME: shouldAnimateOut, delay, duration, shouldRepeat and shouldLoop were occluded from these tests
// due to the async complexity they introduce
describe('StaticAnimator', () => {
  it('renders with a height animation to 100', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={100}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 50', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={50}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 0', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={0}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a height animation to 0', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={0}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with a translateX animation to 100', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="translateX"
          initialValue={0}
          finalValue={100}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });

  it('renders with an opacity animation to 1', () => {
    expect(
      renderer.create(
        <StaticAnimator
          type="height"
          initialValue={0}
          finalValue={1}
          shouldAnimateIn
          animateInCallback={jest.fn()}
          easing={jest.fn()}
        >
          <View style={{ width: 100, height: 100 }} />
        </StaticAnimator>,
      ),
    ).toMatchSnapshot();
  });
});
