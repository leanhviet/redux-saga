// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Footer from '../../components/Footer'

describe('Footer component', () => {
  // Snapshot
  test('should render correctly Footer component default props', () => {
    const component = shallow(<Footer />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
