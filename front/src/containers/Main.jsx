import React, { Component } from "react";
import { Route, Redirect, Switch, BrowserRouter, Link } from "react-router-dom";
import Movie from "./Movie";
import Movies from "./Movies";
import Home from "../components/Home";
import LogInContainer from "./LogInContainer";
import FilterSearchBar from "./NavBarContainer";
import FavoriteContainer from "./Favorite";
import RegisterContainer from "./RegisterContainer";

export default () => (
  <div>
    <div>
      <FilterSearchBar />
    </div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/search" component={Movies} />
      <Route exact path="/favorite" component={FavoriteContainer} />
      <Route exact path="/login" component={LogInContainer} />
      <Route exact path="/register" component={RegisterContainer} />

      <Route path="/movies/:id" component={Movie} />
    </Switch>
  </div>
);
