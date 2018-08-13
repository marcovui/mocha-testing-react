// import React from 'react'
// import expect from 'expect'
// import { shallow, mount } from 'enzyme'
import HelloWorld from './text-in-dom-element'

const wrapper = shallow(<HelloWorld />)

describe('HelloWorld Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).equal('Hello World')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).equal('Welcome to my world')
  })
})

it('should return true if valid user id', () => {
  var isValid = true;
  //assert.equal(isValid, true);
  expect(isValid).to.be.true;
});
it('should return false if invalid user id', () => {
  var isValid = false;
  //assert.equal(isValid, false);
  expect(isValid).to.be.false;
});