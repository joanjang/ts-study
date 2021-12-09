import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/coins/Coin";
import Coins from "./routes/coins/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* COINS ROUTER */}
        <Route path="/coins/:coinId">
          <Coin />
        </Route>
        <Route path="/coins">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
