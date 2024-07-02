const request = require('supertest');
const app = require('./app');

describe('Test the /wawan endpoint', () => {
    it('should respond with a status code of 200 and text "Hello wawan"', async () => {
        const res = await request(app).get('/wawan');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello wawan');
    });
})

describe('Test the /alma endpoint', () => {
    it('should respond with a status code of 200 and text "Hello wawan"', async () => {
        const res = await request(app).get('/alma');
        expect(res.status).toBe(200);
        expect(res.text).toBe('Hello alma');
    });
})

// app.listen(port, ()=>{
//     console.log('app running on port '+port)
// })