import assert from 'assert';
import loginController from './login.controller';

beforeEach('Setting up the userList', () => {
  console.log('beforeEach');
  loginController.loadUserList(['abc123', 'xyz321']);
});

describe('LoginController', () => {

  describe('isValidUserId', () => {

    it('should return true if valid user id', () => {
      var isValid = loginController.isValidUserId('abc123')
      //assert.equal(isValid, true);
      expect(isValid).to.be.true;
    });

    it('should return false if invalid user id', () => {
      var isValid = loginController.isValidUserId('abc1234')
      //assert.equal(isValid, false);
      isValid.should.equal(false);
    });

  });

  describe('isValidUserIdAsync', () => {

    it('should return true if valid user id', (done) => {
      loginController.isValidUserIdAsync('abc123', (isValid) => {
        //assert.equal(isValid, true);
        isValid.should.equal(true);
        done();
      });
    });

  });

});