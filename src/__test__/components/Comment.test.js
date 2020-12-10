// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Component
import Comment from '../../components/Comment'

const mockProps = {
  id: 1,
  name: 'Le Dinh Nam',
  src: '',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quibusdam omnis iusto laboriosam. Nulla aliquid sit, ipsa blanditiis, minus labore asperiores quia tempore culpa dignissimos necessitatibus quod distinctio facilis magnam!',
  likeNumber: '150',
  dislikeNumber: '300'
}

const wrapper = (props = {}) => {
  const component = shallow(<Comment comment={props} />)

  return component
}

describe('Comment component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Comment component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })

  // Testing props
  describe('Handle with props', () => {
    test('should is rendered default props', () => {
      expect(wrapperWithoutProps.find('Profile').props().src).toBeFalsy()
      expect(wrapperWithoutProps.find('Profile').props().name).toMatch(
        'Le Anh Viet'
      )
      expect(wrapperWithoutProps.find('Profile').props().logout).toBeFalsy()
    })

    test('should is rendered with a custom Props', () => {
      const wrapperWithProps = wrapper(mockProps)

      expect(wrapperWithProps.find('Profile').props().src).toMatch(
        mockProps.src
      )
      expect(wrapperWithProps.find('Profile').props().name).toMatch(
        mockProps.name
      )
      expect(wrapperWithProps.find('Profile').props().subName).toMatch(
        mockProps.content
      )
      expect(wrapperWithProps.find('Profile').props().logout).toBeFalsy()
    })
  })
})
