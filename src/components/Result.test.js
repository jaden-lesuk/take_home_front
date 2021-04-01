import React from 'react';
import Result from './Result';
import { create } from 'react-test-renderer'

describe('Result Component Snapshot Test',()=>{
    test('testing result', () => {
    let tree = create(<Result />)
    expect(tree.toJSON()).toMatchSnapshot();
  })
})
