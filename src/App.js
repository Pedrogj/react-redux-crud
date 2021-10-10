import React from "react";
// Components
import { Products } from "./components/Products";
import { ProductNew } from "./components/ProductNew";
import { EditProduct } from "./components/EditProduct";
import { Navbar } from "./components/Navbar";
// React-router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// MaterialUI
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

// Redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Navbar />
        <CssBaseline />
        <Container fixed>
          <Switch>
            <Route exact path="/" component={Products} />
            <Route exact path="/product/new" component={ProductNew} />
            <Route exact path="/product/edit/:id" component={EditProduct} />
          </Switch>
        </Container>
      </Provider>
    </Router>
  );
}

export default App;
