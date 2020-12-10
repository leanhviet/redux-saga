// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Themes
import ImageTheme from '../../themes/images'

// Component
import Profile from '../../components/Profile'

const mockProps = {
  src: ImageTheme.logo,
  name: 'Le Van BB',
  subName: 'Agility IO',
  logout: true
}

const wrapper = (props = {}) => {
  const component = shallow(<Profile {...props} />)

  return component
}

describe('Profile component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Profile component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(
        wrapperWithoutProps.find('.profile__info__username').props().children
      ).toMatch('Le Anh Viet')
      expect(
        wrapperWithoutProps.find('.profile__info__subs').props().children
      ).toMatch('9 Subscribers')
    })

    test('should is rendered with a custom Props', () => {
      const wrapperWithProps = wrapper(mockProps)

      expect(
        wrapperWithProps.find('.profile__info__username').props().children
      ).toMatch(mockProps.name)
      expect(
        wrapperWithProps.find('.profile__info__subs').props().children
      ).toMatch(mockProps.subName)
    })
  })
})
