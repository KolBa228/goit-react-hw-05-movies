import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import APIservices from "services/fetch";
import React from 'react';
import TopMovies from '../../components/TopMovies/TopMovies'
import './style.css';
const Home = () => {

  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();


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
      <TopMovies trendingMovies={trendingMovies} state={{ from: location }}></TopMovies>
    </div>
  );
};

export default Home;