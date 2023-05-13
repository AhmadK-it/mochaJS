import { expect } from 'chai';
import { spawn } from 'child_process';

describe('Commander', () => {
  it('should use default port if no port is specified', done => {
    const child = spawn('node', ['src/index.js']);
    child.stdout.on('data', data => {
      expect(data.toString().trim()).to.equal('port: 8080');
      done();
    });
  });

  it('should use specified port if port is specified', done => {
    const child = spawn('node', ['src/index.js', '--port', '3000']);
    child.stdout.on('data', data => {
      expect(data.toString().trim()).to.equal('port: 3000');
      done();
    });
  });
});
