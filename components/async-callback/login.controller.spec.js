import assert from 'assert';
import loginController from './login.controller';

describe('LoginController', () => {

  describe('isValidUserId', () => {

    it('should return true if valid user id', () => {
      var isValid = loginController.isValidUserId(['abc123', 'xyz321'], 'abc123')
      assert.equal(isValid, true);
    });

    it('should return false if invalid user id', () => {
      var isValid = loginController.isValidUserId(['abc123', 'xyz321'], 'abc1234')
      assert.equal(isValid, false);
    });

  });

  describe('isValidUserIdAsync', () => {

    it('should return true if valid user id', (done) => {
      loginController.isValidUserIdAsync(['abc123', 'xyz321'], 'abc123', (isValid) => {
        assert.equal(isValid, true);
        done();
      });
    });

  });

});