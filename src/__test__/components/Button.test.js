// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Button from '../../components/Button'

const mockClickFunc = jest.fn()
const mockProps = {
  label: 'Search',
  handleOnclick: mockClickFunc,
  className: 'mockClass',
  disabled: false
}

const wrapper = (props = {}) => {
  const component = shallow(<Button {...props} />)

  return component
}

describe('Button component', () => {
  const wrapperWithoutProps = wrapper()
  const wrapperWithProps = wrapper(mockProps)

  // Snapshot
  test('should render correctly Button component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(wrapperWithoutProps.find('button').props().children).toBeFalsy()
    })

    test('should is rendered with a custom Props', () => {
      expect(wrapperWithProps.find('button').props().children).toMatch(
        mockProps.label
      )

      expect(wrapperWithProps.find('button').props().className).toMatch(
        mockProps.className
      )

      expect(wrapperWithProps.find('button').props().disabled).toBe(
        mockProps.disabled
      )
    })
  })

  // Testing events
  describe('Checking events', () => {
    test('check the on Blur callback ', () => {
      wrapperWithProps.simulate('click')

      expect(mockClickFunc).toHaveBeenCalledTimes(1)
    })
  })
})
