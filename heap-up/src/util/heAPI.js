const url = `/api/`;

const heAPI = {
    // Perform a post request to the heAPI
    post: (data) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return console.log(`User created status:${response.status}`);
        })
    },
    put: (data, username) => {
        fetch(`${url}${username}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return console.log(`User record status:${response.status}`);
        })
    },
    get: () => {
        return fetch(url, {
            method: 'GET'
        })
        .then(response => {
            return response.json();
        })
        .then(jsonResponse => {
            return jsonResponse;
        });
    },
    delete: (user) => {
        fetch(url+user, {
            method: 'delete'
        })
        .then(response => {
            console.log(response);
        })
    }
};

export default heAPI;