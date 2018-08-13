// import { expect } from 'chai';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchPost } from "./axios"


describe('Lib', () => {
    it('Should return data from response', (done) => {
        // This sets the mock adapter on the default instance
        var mock = new MockAdapter(axios);

        // Mock GET request to /users when param `searchText` is 'John' 
        // arguments for reply are (status, data, headers)
        mock.onGet('http://awesome.com/posts').reply(200, {
            data: {
                posts: ['Intro to git']
              }
          });
        

        let response = fetchPost();
        console.log(response);
        setTimeout(() => {
            expect(response.posts[0]).to.be.equal('Intro to git');
            done();
         }, 500)
    });
});