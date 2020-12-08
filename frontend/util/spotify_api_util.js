import axios from 'axios';

export function auth() {
    return axios({
        url: "https://accounts.spotify.com/api/token",
        method: 'post',
        data: "grant_type=client_credentials",
        headers: {
            'Authorization': `Basic ${Buffer.from("9fe5c93dc480474bb1cfd78b914acb43:3b4f756a6316421da421beec69af9d55").toString('base64')}`,
        },
    })
}

export function search(accessToken, q, type, market, limit, offset, includeExternal) {
    return axios.get(`https://api.spotify.com/v1/search?q=${q}&type=${type}&market=${market}`, {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${accessToken}`
        }
    })
}