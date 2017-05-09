import React from 'react'
import {shallow} from 'enzyme'
import App from './app'

test('text does not display before clicking button', () => {
  const app = shallow(<App />),
    text = 'Hello there, here is some text, check it out!'

  expect(app.contains(text)).toEqual(false)
})

test('text does display after clicking button', () => {
  const app = shallow(<App />),
    text = 'Hello there, here is some text, check it out!'

  app.find('.btn').simulate('click')

  expect(app.contains(text)).toEqual(true)
})
