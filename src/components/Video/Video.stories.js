// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import Video from './index'

const mockData = {
  img: '',
  timeout: '05:09',
  title: 'Hope',
  publishedTime: '1 day ago',
  channelName: 'Le Van A',
  numberOfViews: '1,000,500'
}

storiesOf('Video', module)
  .add('Default', () => (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MemoryRouter>
            <Video />
          </MemoryRouter>
        </div>
      </div>
    </div>
  ))
  .add('Contain Data', () => (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <MemoryRouter>
            <Video video={mockData} />
          </MemoryRouter>
        </div>
      </div>
    </div>
  ))
