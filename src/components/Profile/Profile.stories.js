// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Profile from './index'

storiesOf('Profile', module)
  .add('Default', () => <Profile logout />)
  .add('Contain content', () => (
    <Profile name="Le Van A" subName="Agility IO" logout />
  ))
