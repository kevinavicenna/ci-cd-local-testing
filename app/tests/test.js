const request = require('supertest');
const app = require('../index');
const { describe } = require('node:test');

describe('GET /', () =>{
    if('should return hello world', (done) =>{
        request(app)
            .get('/')
            .expect(200)
            .expect('Hello World', done);
    });
});