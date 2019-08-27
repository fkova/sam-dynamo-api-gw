const init = require('./utils/init');
const tearDown = require('./utils/tearDown');

const axios = require('axios');

describe('When we invoke the API', () => {  
    beforeAll(() => {
        init();
    });

    test('With valid POST', async () => {
        const response = await axios.post(process.env.BASE_URL,
                {
                    itemId: "123",
                    item_name: "valami"
                }
            );
        expect(response.status).toBe(200);
        expect(response.data).toBe('123');
    });

    
    test('With valid GET', async () => {
        const response = await axios.get(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "valami"
        });
    });

    test('With valid PUT', async () => {
        const response = await axios.put(process.env.BASE_URL + '/123',
            {
                paramName: "item_name",
                paramValue: "más_valami"
            }
        );
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "más_valami"
        });
    });
    
    test('With valid DELETE', async () => {
        const response = await axios.delete(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({});
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('123');
    })
});

describe('When we invoke the LAMBDA', () => {  
    beforeAll(() => {
        init();
    });

    test('With POST', async () => {
        const response = await axios.post(process.env.BASE_URL,
                {
                    itemId: "123",
                    item_name: "valami"
                }
            );
        expect(response.status).toBe(200);
        expect(response.data).toBe('123');
    });

    
    test('With GET', async () => {
        const response = await axios.get(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "valami"
        });
    });

    test('With PUT', async () => {
        const response = await axios.put(process.env.BASE_URL + '/123',
            {
                paramName: "item_name",
                paramValue: "más_valami"
            }
        );
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({ 
            itemId: "123", 
            item_name: "más_valami"
        });
    });
    
    test('With DELETE', async () => {
        const response = await axios.delete(process.env.BASE_URL + '/123');
        expect(response.status).toBe(200);
        expect(response.data).toMatchObject({});
    });

    afterAll(async () => {
        await tearDown.removeDataFromTable('123');
    })
});