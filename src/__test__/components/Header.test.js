// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Header from '../../components/Header'

describe('Header component', () => {
  // Snapshot
  test('should render correctly Header component default props', () => {
    const component = shallow(<Header />)

    expect(shallowToJson(component)).toMatchSnapshot()
  })
})
