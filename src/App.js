// MY API KEY : 28e2df57e43544eaa8e94f9b9d179520

import "./App.css";
import React, { Component } from "react";
import TopNavBar from "./components/TopNavBar";
import News from "./components/News";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <TopNavBar />
          <Routes>
            <Route
              excat
              path="/"
              element={<News key="general" country="in" catagory="general" />}
            />
            <Route
              excat
              path="/business"
              element={<News key="business" country="in" catagory="business" />}
            />

            <Route
              excat
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="in"
                  catagory="entertainment"
                />
              }
            />

            <Route
              excat
              path="/health"
              element={<News key="health" country="in" catagory="health" />}
            />

            <Route
              excat
              path="/science"
              element={<News key="science" country="in" catagory="science" />}
            />

            <Route
              excat
              path="/sports"
              element={<News key="sports" country="in" catagory="sports" />}
            />

            <Route
              excat
              path="/technology"
              element={
                <News key="technology" country="in" catagory="technology" />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
