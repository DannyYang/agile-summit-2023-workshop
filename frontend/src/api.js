import axios from 'axios';

const service = '/VoteService/vote';

function getApi(endpoint) {
    return service + (endpoint || '');
}

export async function paramsApi() {
    return await axios.get(getApi('/params'))
        .then(res => res.data)
        .catch(res => res.response);
};

export async function voteApi(vote) {
    return axios.post(getApi(''), vote)
        .then(res => res.data)
        .catch(res => res.response);
};

export async function recordApi(userId) {
    return axios.get(getApi('/records'), {
        params: {
            userId
        }
    })
    .then(res => res.data)
    .catch(res => res.response);
};

export async function resultApi() {
    return axios.get(getApi('/result'))
        .then(res => res.data)
        .catch(res => res.response);
}