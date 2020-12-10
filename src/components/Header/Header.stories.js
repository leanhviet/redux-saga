// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

// Components
import Header from './index'

storiesOf('Header', module).add('Default', () => (
  <MemoryRouter>
    <Header />
  </MemoryRouter>
))
