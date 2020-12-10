// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Comment from './index'

const mockData = {
  id: 1,
  name: 'Le Dinh Nam',
  src: '',
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus quibusdam omnis iusto laboriosam. Nulla aliquid sit, ipsa blanditiis, minus labore asperiores quia tempore culpa dignissimos necessitatibus quod distinctio facilis magnam!',
  likeNumber: '150',
  dislikeNumber: '300'
}

storiesOf('Comment', module)
  .add('Default', () => <Comment />)
  .add('Contain content', () => <Comment comment={mockData} />)
