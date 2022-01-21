import React from "react";
import axios from "axios";
import './style.css';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGratipay } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";



function Favorites() {
    let favIds = useSelector((state) => state.favIds);
    const dispatch = useDispatch();

    const [moviesList, setMoviesList] = useState([]);

    let removeFav = (id) => {
        setMoviesList(moviesList.filter((el) => el.id != id));
        dispatch({ type: "REMOVE", payload: id });
    };

    useEffect(() => {
        let urls = favIds.map(
            (id) =>
                `https://api.themoviedb.org/3/movie/${id}?api_key=e2127d4a47fa26db35b4b3333e597d25`
        );
        axios
            .all(urls.map((url) => axios.get(url).then((res) => res.data)))
            .then((resArray) => setMoviesList([...moviesList, ...resArray]));
    }, []);

    useEffect(() => { }, [favIds]);

    return (
        <div className="container py-5">
            <h1 className="head p-3 bg-opacity-10 bg-danger">Favourites</h1>
            <FontAwesomeIcon className="icon-fav" icon={faGratipay} />
            <div className="row">
                {moviesList.map((movie) => {
                    return (
                        <div className="Mov card col-2" key={movie.id}>
                            <button
                                className={"btn btn-outline-danger active"}
                                onClick={() => removeFav(movie.id)}
                            >
                                <FontAwesomeIcon className="Xicon" icon={faTimes} />
                            </button>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{movie.title}</h6>
                                <Link to={`/watchMovies/${movie.id}`} className="btn btn-outline-danger">Watch Now!</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Favorites;