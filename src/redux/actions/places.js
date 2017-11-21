import actionTypes from "./actionTypes";

/* action creator used by redux-thunk middleware */
export default function fetchPlaces() {
    return dispatch => {
        dispatch({ type: actionTypes.FETCH_PLACES_REQUEST });

        fetch("https://api.myjson.com/bins/r4r67")
        .then(response => {
            return response.json();
        })
        .then(places => {
            dispatch({ type: actionTypes.FETCH_PLACES_SUCCESS, payload: places });
        })
        .catch(err => {
            dispatch({ type: actionTypes.FETCH_PLACES_ERROR, err });
        });
    };
}