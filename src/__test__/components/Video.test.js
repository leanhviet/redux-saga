// Libs
import React from 'react'
import { shallowToJson } from 'enzyme-to-json'
import { shallow } from 'enzyme'

// Themes
import ImageTheme from '../../themes/images'

// Component
import Video from '../../components/Video'

const mockProps = {
  img: ImageTheme.profile,
  timeout: '05:30',
  title: 'I hope',
  publishedTime: 'Published on 2 weeks ago',
  channelName: 'Le Anh B',
  numberOfViews: '2,111,242'
}

const wrapper = (props = {}) => {
  const component = shallow(<Video video={props} />)

  return component
}

describe('Video component', () => {
  const wrapperWithoutProps = wrapper()

  // Snapshot
  test('should render correctly Video component default props', () => {
    expect(shallowToJson(wrapperWithoutProps)).toMatchSnapshot()
  })
})
