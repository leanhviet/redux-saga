// Libs
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { whyDidYouUpdate } from 'why-did-you-update'

// Stylesheet
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import './App.css'

// Components
import MainLayout from './pages'

// Store
import { store } from './store'

if (process.env.NODE_ENV !== 'production') {
  whyDidYouUpdate(MainLayout)
}

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Router>
        <MainLayout />
      </Router>
    </Provider>
  </div>
)

export default App
