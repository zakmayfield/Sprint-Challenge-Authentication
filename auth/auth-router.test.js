const request = require('supertest');
const server = require('../api/server.js');

describe('POST /api/auth/register', function () {
  it('should return status 201', function () {
    return request(server)
      .post('/api/auth/register')
      .send({ username: "testing14", password: "pass" })
      .then(res => {
        expect(res.status).toBe(201);
      })
  })

  it('should return an array of users', function(){
    return request(server)
      .post('/api/auth/register')
      .send({ username: "testing15", password: "pass" })
      .then(res => {
        expect(Array.isArray(res.body)).toBe(true)
      })
  })
})

describe('POST /api/auth/login', function(){
  it('should return status 200', function(){
    return request(server)
      .post('/api/auth/login')
      .send({ username: "testing6", password: "pass"})
      .then(res => {
        expect(res.status).toBe(200)
      })
  })

  it('should return json format', function(){
    return request(server)
      .post('/api/auth/login')
      .send({ username: "testing6", password: "pass"})
      .then(res => {
        expect(res.type).toMatch(/json/)
      })
  })
})