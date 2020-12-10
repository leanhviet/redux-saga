// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Indicator from '../../components/Indicator'

describe('Indicator component', () => {
  // Snapshot
  test('should render correctly Indicator component default props', () => {
    const component = shallow(<Indicator />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
