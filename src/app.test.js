import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import App from './app'

test('text displays after clicking button', () => {
  // Render a checkbox with label in the document
  const app = shallow(
    <App />
  )

  expect(app.h2().exists()).to.be(false)

  app.find('.btn').simulate('click')

  expect(app.h2().exists()).to.be(true)
})