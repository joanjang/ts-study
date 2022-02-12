import { Switch, Route } from "react-router-dom";
import Chart from "./Chart";
import Price from "./Price";

interface CoinProps {
  coinId: string;
  isDarkMode: boolean;
}

function CoinTabRouter({ coinId, isDarkMode }: CoinProps) {
  return (
    <Switch>
      <Route path={`/coins/:coinId/price`}>
        <Price />
      </Route>
      <Route path={[`/coins/:coinId`, `/coins/:coinId/chart`]}>
        <Chart coinId={coinId} isDarkMode={isDarkMode} />
      </Route>
    </Switch>
  );
}

export default CoinTabRouter;
