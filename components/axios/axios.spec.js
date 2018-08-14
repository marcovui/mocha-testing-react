import axios from 'axios'
import moxios from 'moxios'
import sinon from 'sinon'
import { equal } from 'assert'
import { getUsers } from './get-users';
describe('get-users', () => {
  
  beforeEach(function () {
    // import and pass your custom axios instance to this method
    moxios.install()
  })

  afterEach(function () {
    // import and pass your custom axios instance to this method
    moxios.uninstall()
  })

  it('stub response for any matching request URL', function (done) {
   
    getUsers();

    moxios.wait(function () {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: [
          { id: 1, firstName: 'Fred', lastName: 'Flintstone' },
          { id: 2, firstName: 'Wilma', lastName: 'Flintstone' }
        ]
      }).then(function (res) {
        console.log(res.data)
        expect(res.data[0].id).equal(2);
        done()
      })
      .then(done, done);
    })
  })



  it('just for a single spec', function (done) {
    moxios.withMock(function () {
      let onFulfilled = sinon.spy()
      axios.get('/users/12345').then(onFulfilled)

      moxios.wait(function () {
        let request = moxios.requests.mostRecent()
        request.respondWith({
          status: 200,
          response: {
            id: 12345, firstName: 'Fred', lastName: 'Flintstone'
          }
        }).then(function () {
          equal(onFulfilled.called, true)
          done()
        })
      })
    })
  })
  /*
it('should display the data', (done) => {
  const data = ['john', 'doe', 'pogi'];
  const resolved = new Promise((r) => r({ data }));
  sandbox.stub(axios, 'get').returns(resolved);
  getUsers()
    .then(() => {
      expect($('#users').innerHTML)
        .to.equal('john,doe,pogi') })
    .then(done, done);
 });
it('should display the data', (done) => {
  const rejected = new Promise((_, r) => r());
  sandbox.stub(axios, 'get').returns(rejected);
  getUsers()
    .catch(() => {
      expect($('#users').innerHTML)
        .to.equal('An error occured.') })
    .then(done, done);
});
*/
});