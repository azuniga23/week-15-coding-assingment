const Houses_Endpoint = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HousesApi {
    get = async () => {
        try {
            const resp = await fetch(Houses_Endpoint);
            const data = await resp.json();
            return data;
        }   catch(e) {
            console.log('ERROR,fetchHouse had an issue', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${Houses_Endpoint}/${house._id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        }   catch(e) {
            console.log('ERROR, updating houses had an issue', e);
        }
    }
}

export const housesApi = new HousesApi();