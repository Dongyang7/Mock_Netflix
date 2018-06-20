export const DELETE = 'DELETE';
export const ADD = 'ADD';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export function deleteFn(movie) {
    return {
        type: DELETE,
        movie
    }
}
export function addFn(movie) {
    return {
        type: ADD,
        movie
    }
}
export function getMovies() {
    return dispatch=>{
        fetch('http://localhost:8081/getdata')
        .then(response=>response.json())
        .then(respJSON=>{
            dispatch({
                type:FETCH_MOVIES,
                payload:respJSON
            })
        })
    }
}