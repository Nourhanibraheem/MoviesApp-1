import { axiosInstance } from "../../network/axiosinstance";

export const getMovielist = () => (dispatch) => {
    return axiosInstance
        .get("https://api.themoviedb.org/3/movie/popular?api_key=e2127d4a47fa26db35b4b3333e597d25")
        .then((res) =>
            dispatch({
                type: "GET_MOVIE_LIST" (res.data.results)
                // type: "GET_MOVIE_LIST",
                // payload: res.data.results,
            })
        )
        .catch((err) => console.log(err));
};