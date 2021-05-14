import React from "react";
import HomeScreen from "../Screens/HomeScreen";
import ProductScreen from "../Screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Switch>
        <Container className="py-3">
          <Route path="/" exact component={HomeScreen} />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </Switch>
    </main>
  );
}

export default Main;
