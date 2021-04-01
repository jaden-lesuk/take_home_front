import React from 'react';
import App from './App';
import { create } from 'react-test-renderer'

describe('App Component Snapshot Test',()=>{
    test('testing app', () => {
    let tree = create(<App />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
