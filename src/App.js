import React, { useEffect, useState } from "react";
import { guests } from "./Guests/guests";
import styled from "styled-components";
import GlobalStyle from "./Components/Global";
import { Header } from "./Components/Header";
import { Invite } from "./Components/Invite";
import { Map } from "./Components/Map";
import { Slider } from "./Components/Slider";
import { Presents } from "./Components/Presents";
import { Colors } from "./Components/Colors";
import { Table } from "./Components/Table";
import { Statistic } from "./Components/Statistic";
import { Conditions } from "./Components/Conditions";

function App() {
  const [data, setData] = useState([]);
  const [URLname, SetURLname] = useState("");

  const fetchGuestsData = () => {
    fetch(
      "https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  useEffect(() => {
    fetchGuestsData();
    SetURLname(window.location.pathname);
  }, []);

  // const URLname = window.location.pathname;

  let statistic;
  let guest;
  let guestData;

  for (let key in guests) {
    if (`/${key}` === URLname) {
      guest = guests[key];
      guestData =
        data && data.length > 0 ? data.filter((e) => e.name == key)[0] : null;
    }
  }

  if (URLname === "/statistic") {
    statistic = true;
  }

  return (
    <>
      {statistic && (
        <>
          <GlobalStyle />
          <Statistic data={data} />
        </>
      )}

      {!statistic && (
        <>
          <GlobalStyle />
          <TopWrapper>
            <Container>
              <TopHeader />
            </Container>
          </TopWrapper>
          <InviteWrapper>
            <Container>
              <Invite data={data} guestData={guestData} guest={guest} />
              <SliderInner>
                <Slider />
              </SliderInner>
              <Map />
              <Colors />
              <Conditions />
              <Table />
            </Container>
          </InviteWrapper>
        </>
      )}
    </>
  );
}

const TopWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto;

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.1)),
    url("./images/top-image.jpg");
  background-size: cover;
  min-height: 1000px;
  background-position: top center;

  @media (max-width: 768px) {
    max-width: 920px;
    min-height: 758px;
    background-position-x: calc(50% + 39px);
  }
`;

const InviteWrapper = styled.div`
  width: 100vw;
  background-size: cover;
  overflow: hidden;
  padding-bottom: 100px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 5px;
  }
`;

const TopHeader = styled(Header)`
  margin: 0 auto;
  padding: 0 10px;
`;

const SliderInner = styled.div`
  max-width: 650px;
  height: auto;
  padding: 50px 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 460px;
  }
`;

export default App;
