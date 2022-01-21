
export const addTolist = (id) => (dispatch) => {
    return (
        dispatch({
            type: "ADD",
            payload: id
        })  
    )
};
export const removeFromlist = (id) => (dispatch) => {
    return (
        dispatch({
            type: "REMOVE",
            payload: id
        })        
    )
};

