// import { lazy, Suspense } from "react";
// import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
// import './style.css';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('../components/Cast/Cast'));
// const Reviews = lazy(() => import('../components/Reviews/Reviews'));

// export const App = () => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/movies">Search</NavLink>
//       </nav>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="movies" element={<Movies />} />
//           <Route path="*" element={() => navigate("/")} />
//           <Route path="movies/:movieId" element={<MovieDetails />}>
//             <Route path="cast" element={<Cast />} />
//             <Route path="reviews" element={<Reviews />} />
//           </Route>
//         </Routes>
//       </Suspense>
//     </>
//   );
// };

import { lazy, Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import './style.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Search</NavLink>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
           <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  );
};
