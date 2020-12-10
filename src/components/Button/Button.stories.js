// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Button from './index'

storiesOf('Button', module)
  .add('Default', () => (
    <Button label="default" handleOnclick={action('clicked')} />
  ))
  .add('Disabled', () => (
    <Button label="default" handleOnclick={action('clicked')} disabled />
  ))
