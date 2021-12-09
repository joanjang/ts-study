import { Switch, Route } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";

function CoinTabRouter() {
  return (
    <Switch>
      <Route path={`/coins/:coinId/price`}>
        <Price />
      </Route>
      <Route path={`/coins/:coinId/chart`}>
        <Chart />
      </Route>
    </Switch>
  );
}

export default CoinTabRouter;
