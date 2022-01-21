// import { axiosInstance } from "../../network/axiosinstance";
import axios from "axios";

export const getMovielist = () => async (dispatch) => {
    return axios.get("https://api.themoviedb.org/3/movie/popular?api_key=e2127d4a47fa26db35b4b3333e597d25")
        .then((res) =>
            dispatch({
                type: "GET_MOVIE_LIST",
                payload: res.data.results,
            })
        )
        .catch((err) => console.log(err));
};