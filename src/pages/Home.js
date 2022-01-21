import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGratipay, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { getMovielist } from "../store/actions/fav";
import { addTolist } from "../store/actions/favourite";
import { removeFromlist } from "../store/actions/favourite";


export default function Movies() {
    const fav = useSelector((state) => state.fav.list);
    console.log(fav)
    const favIds = useSelector((state) => state.root.favIds);
    const dispatch = useDispatch();

    let isFav = (id) => {
        return favIds.find((el) => el === id);
    };

    let toggleFav = (id) => {
        isFav(id)
            ? dispatch(removeFromlist(id))
            : dispatch(addTolist(id));
    };

    useEffect(() => {
        dispatch(getMovielist());
    }, []);
        // axios
        //     .get("https://api.themoviedb.org/3/movie/popular?api_key=e2127d4a47fa26db35b4b3333e597d25")
        //     .then((res) => setMovies(res.data.results))
        //     .catch((err) => console.log(err));
    return (
        <div className="container py-5">
            <h1 className="head p-3 bg-opacity-10 bg-danger">Movies</h1>
            <FontAwesomeIcon className="h-icon" icon={faYoutube} />
            <div className="row">
                {fav.map((movie) => {
                    return (
                        <div className="Mov card col-3" key={movie.id} >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h6 className="card-title">{movie.title}</h6>

                                <button
                                    className={`btn btn-outline-danger fav ${isFav(movie.id) ? "active" : ""}`}
                                    onClick={() => toggleFav(movie.id)}
                                >
                                    <FontAwesomeIcon className="heart-icon" icon={faGratipay} />
                                </button>
                                <Link to={`/watchMovies/${movie.id}`} className="btn btn-outline-danger">Watch Now!</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );

}