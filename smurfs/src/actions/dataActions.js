import { FETCH_DATA, NEW_DATA } from './types';


export const fetchData = () => dispatch => {
    fetch('http://localhost:3333/smurfs')
    .then(res => res.json())
    .then(smurfs => dispatch({
        type: FETCH_DATA,
        payload: smurfs
    }));
};
export const createData = smurfData => dispatch => {
    fetch('http://localhost:3333/smurfs', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(smurfData)
    })
    .then(res => res.json())
    .then(smurf => dispatch({
        type: NEW_DATA,
        payload: smurf
    }))
};