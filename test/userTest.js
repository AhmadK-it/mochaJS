import { expect } from 'chai';
import User from '../src/user.js';

describe('User', function() {
  describe('constructor', function() {
    it('should initialize all fields correctly', function() {
      const id = 1;
      const lastname = 'Doe';
      const firstname = 'John';
      const user = new User(id, lastname, firstname);

      expect(user).to.have.property('id', id);
      expect(user).to.have.property('lastname', lastname);
      expect(user).to.have.property('firstname', firstname);
    });
  });

  describe('.fullname()', function() {
    it('should return the correct full name', function() {
      const user = new User(1, 'Doe', 'John');

      expect(user.fullname()).to.equal('John Doe');
    });
  });
});
