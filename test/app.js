const { app } = require('../src/app')
const knex = require('../utils/db')
const request = require('supertest').agent(app.listen())

describe('Categories', () => {
    it('should have Categories List', done => {
        knex.select().from('categories').then(data => {
            request
                .get('/api/categories')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('Pools', () => {
    it('should have Pools List', done => {
        knex.select().from('pools').then(data => {
            request
                .get('/api/pools')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('Pools Id', () => {
    it('should have Pools by Id', done => {
        knex('pools').where('id', 1).then(data => {
            request
                .get('/api/pools/1')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('Pools Message', () => {
    it('should have Pools by Id', done => {
        knex.select('*').from('messages').where('pools_id', 1).then(data => {
            request
                .get('/api/pools/messages/1')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('POST Pools', () => {
    it('should have POST Pools', done => {
        request
            .post('/api/pools')
            .send({ name: 'LittleTest', users_id: 1 })
            .expect(200, done)
    })
})

describe('Messages', () => {
    it('should have Messages List', done => {
        knex.select('*').from('messages').then(data => {
            request
                .get('/api/messages')
                .expect(200)
                .expect(data, done)
        }).catch(done)
    })
})

describe('POST Messages', () => {
    it('should have POST Message', done => {
        request
            .post('/api/messages')
            .send({ message: "Just a test", pools_id: 1, categories_id: 1 })
            .expect(200, done)
    })
})