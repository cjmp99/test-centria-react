import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home";
import ProductsState from "context/productsState";
import Shopping from "pages/shopping";
import Cart from "pages/cart";

function App() {
  return (
    <ProductsState>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </ProductsState>
  );
}

export default App;
