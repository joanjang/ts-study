import { Switch, Route, Redirect } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";

interface CoinProps {
  coinId: string;
}

function CoinTabRouter({ coinId }: CoinProps) {
  return (
    <Switch>
      <Route path={`/coins/:coinId/price`}>
        <Price />
      </Route>
      <Route path={[`/coins/:coinId`, `/coins/:coinId/chart`]}>
        <Chart coinId={coinId} />
      </Route>
    </Switch>
  );
}

export default CoinTabRouter;
