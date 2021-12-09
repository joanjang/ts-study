import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Container = styled.div`
  padding: 0.2rem 1.2rem;
  margin: 0 auto;
  max-width: 30rem;
`;

const Header = styled.header`
  display: flex;
  height: 15vh;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.accentColor};
`;

const ConinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 1rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.05rem;

  a {
    display: flex;
    padding: 1.2rem;
    align-items: center;
    transition: color 0.2s ease-in;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Img = styled.img`
  width: 2.2rem;
  height: 2.2rem;
  margin-right: 0.7rem;
`;

function Coins() {
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>COIN</Title>
      </Header>
      <ConinList>
        {loading
          ? "Loading..."
          : coins.map((coin) => (
              <Coin key={coin.id}>
                <Link
                  to={{
                    pathname: `/coins/${coin.id}`,
                    state: { name: coin.name },
                  }}
                >
                  <Img
                    src={`https://cryptoicon-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  />
                  {coin.name} &rarr;
                </Link>
              </Coin>
            ))}
      </ConinList>
    </Container>
  );
}
export default Coins;
