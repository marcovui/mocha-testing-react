import sinon from 'sinon';
import axios from 'axios';
import $ from 'jquery';
import getUsers from './get-users';
describe('get-users', () => {
  let sandbox;
  beforeEach(() => sandbox = sinon.createSandbox());
  afterEach(() => sandbox.restore());
  it('should display a blankslate', (done) => {
    const resolved = new Promise((r) => r({ data: [] }));
    sandbox.stub(axios, 'get').returns(resolved);
    getUsers()
      .then(() => {
        expect($('#users').innerHTML)
          .to.equal('The list is empty.') })
      .then(done())
      .catch();
    });
  it('should display the data', (done) => {
    const data = ['john', 'doe', 'pogi'];
    const resolved = new Promise((r) => r({ data }));
    sandbox.stub(axios, 'get').returns(resolved);
    getUsers()
      .then(() => {
        expect($('#users').innerHTML)
          .to.equal('john,doe,pogi') })
      .then(done())
      .catch();
   });
  it('should display the data', (done) => {
    const rejected = new Promise((_, r) => r());
    sandbox.stub(axios, 'get').returns(rejected);
    getUsers()
      .then(done())
      .catch(() => {
        expect($('#users').innerHTML)
          .to.equal('An error occured.') 
          done();
        })
  });
});