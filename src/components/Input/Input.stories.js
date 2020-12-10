// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Input from './index'

storiesOf('Input', module)
  .add('Default', () => <Input />)
  .add('Input has handle event on enter', () => (
    <Input
      placeholder="TextBox"
      defaultValue="Viet"
      handleOnKeyDown={action('entered')}
    />
  ))
