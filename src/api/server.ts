// If I used a token in Flask, can do:
const token = '6e96b74e8bfba7cbe3f2cc67bd45096d74baece1a83b666c'

// then will use that Token later in code

// below is an Object that writes rules for how to communicate with back-end database
// just like we did in Insomnia but without the tokens (on this project)
export const server_calls = {
    get: async () => {
        const response = await fetch(`https://jbones-car-inventory.glitch.me/api/cars`, 
        
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        } 

        return await response.json()
    },

    // Create a new car in the inventory
    create: async (data: any = {}) => {
        const response = await fetch(`https://jbones-car-inventory.glitch.me/api/cars`,

        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!response.ok) {
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    // Update a car in the car inventory 
    update: async (id:string, data: any = {}) => {
        const response = await fetch (`https://jbones-car-inventory.glitch.me/api/cars/${id}`,

        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to update data on the server')
        }

        return await response.json()
    },

    delete: async (id:string, data: any = {}) => {
        const response = await fetch (`https://jbones-car-inventory.glitch.me/api/cars/${id}`,
        
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete data from the server')
        }

        return;
    }

}