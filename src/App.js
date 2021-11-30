import React from "react";
import Home from "./Home";
import CountriesList from "./CountriesList";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import CountrySingle from "./CountrySingle";

const RouteWrapper = (props) => {
  const params = useParams();
  return <CountrySingle params={params} {...props} />;
};
// class component cannot use param or match which are hooks, so we do this RouteWrapper
const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home </Link>
            {/* Link is exactly the same as a href but we use link so that the page is not reloaded all the time */}
          </li>
          <li>
            <Link to="/countries">Countries </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<CountriesList />} />
        <Route path="countries/:name" element={<RouteWrapper />} />
        {/* :name for the dynamic name (biggest change in routes) */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
