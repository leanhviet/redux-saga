// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Input from '../../components/Input'

// Constants
import keycodes from '../../constants/keycodes'

const mockKeyDownFunc = jest.fn()
const mockProps = {
  type: 'text',
  defaultValue: 'Robert Downey Jr',
  placeholder: 'Enter on textbox, please!',
  className: 'mockClass',
  handleOnKeyDown: mockKeyDownFunc
}

const wrapper = (props = {}) => {
  const component = shallow(<Input {...props} />)

  return component
}

describe('Input component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Input component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(wrapperWithoutProps.find('input').props().defaultValue).toBeFalsy()
    })

    test('should is rendered with a custom Props', () => {
      const wrapperWithProps = wrapper(mockProps)

      // Expected with a placeholder
      expect(wrapperWithProps.find('input').props().placeholder).toMatch(
        mockProps.placeholder
      )

      // Expected with a defaultValue
      expect(wrapperWithProps.find('input').props().value).toMatch(
        mockProps.defaultValue
      )

      // Expected with a defaultValue
      expect(wrapperWithProps.find('input').props().className).toMatch(
        mockProps.className
      )
    })
  })

  // Testing events
  describe('Checking events', () => {
    test('check the on Enter Press callback ', () => {
      const InputComponent = wrapper(mockProps)

      const input = InputComponent.find('input')
      const value = 'John Hart J'

      input.simulate('keydown', {
        keyCode: keycodes.KEY_ENTER,
        target: { value }
      })

      expect(mockKeyDownFunc).toHaveBeenCalledTimes(1)
    })

    test('check the on Change callback ', () => {
      const input = wrapperWithoutProps.find('input')
      const value = 'John Hart Jr'

      input.simulate('change', {
        target: { value }
      })

      expect(wrapperWithoutProps.find('input').props().value).toEqual(value)
    })
  })
})
