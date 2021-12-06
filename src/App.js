import "assets/css/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import HomePages from "assets/pages/HomePages";
import Details from "assets/pages/Details";
import Cart from "assets/pages/Cart";
import Congratulation from "assets/pages/Congratulation";
import NotFound from "assets/pages/NotFound";

import Provider from "assets/helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route exact path="/categories/:idc" component={Details} />
          <Route path="/categories/:idc/products/:idp" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
