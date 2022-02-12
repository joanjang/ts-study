import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/coins/Coin";
import Coins from "./routes/coins/Coins";
import Test from "./routes//Test";

interface IRouterProps {
  toggleMode: () => void;
  isDarkMode: boolean;
}

function Router({ toggleMode, isDarkMode }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        {/* COINS ROUTER */}
        <Route path="/coins/:coinId">
          <Coin isDarkMode={isDarkMode} />
        </Route>
        <Route path="/coins">
          <Coins toggleMode={toggleMode} />
        </Route>
        <Route path="/">
          <Test />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default Router;
