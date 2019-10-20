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
};

export default heAPI;