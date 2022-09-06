const HOUSES_ENDPOINT = "https://ancient-taiga-31359.herokuapp.com/api/houses";

class HousesAPI {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log("fetchHouses has an issue", e);
        } 
    }

    put = async() => {
        try {
            const resp = await fetch(`${HOUSES_ENDPOINT}/${house._id}`, {
                method: 'PUT',
                header: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch (e) {
            console.log('looks like update houses had an issue',e);
        }
    }
}

export const housesApi = new HousesAPI();