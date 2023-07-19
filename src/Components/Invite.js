import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Invite = ({ data, guestData, guest }) => {
  const [date, setDate] = useState({ today: 0, thour: 0, tmin: 0, tsec: 0 });
  const [checked, setChecked] = useState(true);
  const [id, setId] = useState();
  const [alcohol, setAlcohol] = useState({});
  const [noAlcohol, setNoAlcohol] = useState();

  let timeend = new window.Date(2023, 7, 26, 14, 0);

  useEffect(() => {
    if (guestData) {
      setChecked(guestData.isPresent);
      setId(guestData.id);
      setAlcohol(guestData.alcohol);
      setNoAlcohol(guestData.noAlcohol);
    }
  }, [data, guestData]);

  useEffect(() => {
    const timer = setInterval(() => {
      time();
    }, 1000);

    return () => clearInterval(timer);
  });

  function time() {
    let today = new window.Date();
    today = Math.floor((timeend - today) / 1000);
    let tsec = today % 60;
    today = Math.floor(today / 60);
    if (tsec < 10) tsec = "0" + tsec;
    let tmin = today % 60;
    today = Math.floor(today / 60);
    if (tmin < 10) tmin = "0" + tmin;
    let thour = today % 24;
    today = Math.floor(today / 24);

    setDate({ ...date, today: today, thour: thour, tmin: tmin, tsec: tsec });
  }

  const presenceChange = () => {
    setChecked(!checked);

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/isPresent.json`,
      {
        method: "PUT",
        body: JSON.stringify(!checked),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/isVisited.json`,
      {
        method: "PUT",
        body: JSON.stringify(true),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  const alcoholChange = (e) => {
    let event = e.target.id;

    setAlcohol({ ...alcohol, [event]: !alcohol[event] });
    setNoAlcohol(false);

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/alcohol/.json`,
      {
        method: "PUT",
        body: JSON.stringify({ ...alcohol, [event]: !alcohol[event] }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/noAlcohol/.json`,
      {
        method: "PUT",
        body: JSON.stringify(false),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  const noAlcoholChange = () => {
    setAlcohol({ ...alcohol, vino: false, vodka: false, wisky: false });
    setNoAlcohol(!noAlcohol);

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/alcohol/.json`,
      {
        method: "PUT",
        body: JSON.stringify({
          ...alcohol,
          vino: false,
          vodka: false,
          wisky: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    fetch(
      `https://dmitrotamila-default-rtdb.europe-west1.firebasedatabase.app/${id}/noAlcohol/.json`,
      {
        method: "PUT",
        body: JSON.stringify(!noAlcohol),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
  };

  return (
    <InviteWrapper>
      {guest ? (
        <>
          <Name>
            <span>{guest.name}</span>
            <br />З радістю запрошуємо {guest.invite} на наше весілля.
          </Name>
        </>
      ) : (
        ""
      )}
      <Invitation>
        Яке відбудеться:
        <br /> 26 серпня 2023р
      </Invitation>
      <Date id="date" />
      <Invitation>Початок весілля о 14:00</Invitation>

      <DaysLeft>
        <span>До свята залишилось:</span>
        <br /> {date.today}днів {date.thour}годин {date.tmin}хвилин {date.tsec}
        секунд
      </DaysLeft>
      <Presence>
        <PresenceTitle>Пожалуйста, подтвердиде ваше присутствие:</PresenceTitle>
        <PresenceCheckbox>
          <input
            type="checkbox"
            id="highload1"
            name="highload1"
            checked={checked}
            onChange={presenceChange}
          />
          <label
            for="highload1"
            data-onlabel="обов`язково прийду)))"
            data-offlabel="нажаль не зможу прийти"
            className="lb1"
          ></label>
        </PresenceCheckbox>
        {checked && (
          <Alcohols>
            <Alcohol>
              <input
                type="checkbox"
                checked={alcohol.vino}
                id="vino"
                onChange={alcoholChange}
              />
              <label for="vino" className="text">
                Вино
              </label>
            </Alcohol>
            <Alcohol>
              <input
                type="checkbox"
                id="vodka"
                checked={alcohol.vodka}
                onChange={alcoholChange}
              />
              <label for="vodka" className="text">
                Водка
              </label>
            </Alcohol>
            <Alcohol>
              <input
                type="checkbox"
                id="wisky"
                checked={alcohol.wisky}
                onChange={alcoholChange}
              />
              <label for="wisky" className="text">
                Виски
              </label>
            </Alcohol>
            <Alcohol>
              <input
                type="checkbox"
                id="noAlcohol"
                checked={noAlcohol}
                onChange={noAlcoholChange}
              />
              <label for="noAlcohol" className="text">
                Не вживаю алкоголь
              </label>
            </Alcohol>
          </Alcohols>
        )}
      </Presence>
    </InviteWrapper>
  );
};

const InviteWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: calc(50% - 874px);
    height: 2413px;
    width: 781px;
    background: url(./images/flower1.png);
    z-index: -1;
    opacity: 0.5;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    right: calc(50% - 874px);
    height: 2413px;
    width: 781px;
    background: url(./images/flower1.png);
    z-index: -1;
    transform: scale(-1, 1);
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    &:before {
      transform: scale(0.7);
      width: 795px;
      height: 2413px;
      left: calc(50% - 712px);
      top: -363px;
    }

    &:after {
      transform: scale(-0.7, 0.7);
      width: 795px;
      height: 2413px;
      right: calc(50% - 712px);
      top: -363px;
    }
  }
`;

const Name = styled.p`
  font-family: "Caveat", cursive;
  font-size: 40px;
  color: #000000;
  padding-top: 70px;
  margin-bottom: 53px;
  span {
    font-size: 58px;
    display: inline-block;
    margin-bottom: 15px;
  }
`;

const Invitation = styled.p`
  font-family: "Caveat", cursive;
  font-size: 40px;
  color: #000000;
  margin-bottom: 40px;
`;

const Date = styled.div`
  margin: 0 auto;
  max-width: 775px;
  height: 697px;
  background-image: url(./images/calendar3.png);
  /* background-size: cover; */
  background-size: contain;
  background-repeat: no-repeat;
  padding-top: 30px;

  @media (max-width: 768px) {
    height: 400px;
    background-position: center;
  }
`;

const DaysLeft = styled.div`
  font-family: "Caveat", cursive;
  margin: 0 auto;
  max-width: 691px;
  font-size: 40px;

  span {
    font-size: 50px;
  }
`;

const Presence = styled.div`
  padding-top: 60px;
  margin-bottom: 16px;
`;

const Alcohols = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  max-width: 450px;
  margin: 0 auto;
  padding-top: 60px;
  margin-bottom: 16px;
`;

const Alcohol = styled.div`
  font-size: 60px;
  input {
    width: 37px;
    height: 37px;
  }
`;

const PresenceTitle = styled(Invitation)``;

const PresenceCheckbox = styled.div`
  margin: 0 auto;

  .lb1 {
    margin: 2em;
  }
  #highload1 {
    display: none;
  }
  #highload1 + .lb1,
  #highload1 + .lb1::before,
  #highload1 + .lb1::after {
    transition: all 0.3s;
  }
  #highload1 + .lb1 {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 59px;
    border-radius: 30px;
    cursor: pointer;
  }
  #highload1 + .lb1::before {
    display: block;
    content: attr(data-offlabel);
    position: absolute;
    top: 12px;
    right: 14px;
    color: black;
    font-size: 27px;
  }
  #highload1 + .lb1::after {
    border-radius: 50%;
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 54px;
    height: 54px;
    background-color: white;
  }
  #highload1:checked + .lb1::before {
    content: attr(data-onlabel);
    left: 16px;
    right: auto;
    color: #fff;
  }
  #highload1:checked + .lb1::after {
    left: 245px;
    background-color: #f7f7f7;
  }

  #highload1 + .lb1 {
    background-color: #ccc;
  }
  #highload1:checked + .lb1 {
    background-color: green;
  }
  #highload1:checked + .lb1::before {
    color: #fff;
  }
`;
