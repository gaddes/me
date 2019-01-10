import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Tech from "./Tech";
import Projects from "./Projects";
import Contact from "./Contact";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/home" component={App} />
      <Route exact path="/tech" component={Tech} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
      {/* <Route path="/store/:storeId" component={App} /> */}
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
