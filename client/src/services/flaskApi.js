export const sendConvo = (body) => {
    try {
        return fetch("/conversations", {
            'method': 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        })
            .then(res => res.json())
            .catch(error => console.log(error));
    } catch (error) {
        console.log(error);
    }
}