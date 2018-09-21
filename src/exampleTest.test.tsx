import * as React from 'react'
import { mount } from 'enzyme'

test('renders a react component without 💥',() => {
  const MyComponent: React.SFC = () => <span>hello</span>

  expect(mount(<MyComponent />).containsMatchingElement(<span>hello</span>)).toBe(true)
})