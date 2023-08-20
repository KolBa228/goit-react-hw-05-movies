import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useSearchParams, useParams, Outlet, SharedLayout, useNavigate, Navigate, useLocation } from "react-router-dom";
import APIservices from "services/fetch";
import React from 'react';
import './style.css';
const Home = ({ movies }) => {

const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const trendingData = await APIservices.fetchTrendingMovies();
        setTrendingMovies(trendingData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;