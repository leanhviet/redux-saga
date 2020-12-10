import { configure } from '@storybook/react'
import '../src/index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'

const req = require.context('../src', true, /\.stories\.js$/)

const loadStories = () => {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
