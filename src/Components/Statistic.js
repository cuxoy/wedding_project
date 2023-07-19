import React from "react";
import styled from "styled-components";

export const Statistic = ({ data }) => {
  return (
    <>
      <TableWrapper>
        <Container>
          <Title>Інформація о ваших гостях:</Title>
          <Table>
            <Item>
              <ItemText>Ім'я</ItemText>
              <ItemText>Чи буде присутній</ItemText>
              <ItemText>Який алкоголь буде вживати</ItemText>
            </Item>
            {data.map((item) => {
              return (
                <Item>
                  <ItemText>{item.name}</ItemText>
                  <ItemText>
                    {!item.isVisited
                      ? "не обирав"
                      : item.isPresent
                      ? "так"
                      : "ні"}
                  </ItemText>
                  <ItemText>
                    {item.noAlcohol
                      ? "  не вживаю"
                      : `  ${item.alcohol.vodka ? "водка, " : ""} ${
                          item.alcohol.vino ? "вино, " : ""
                        } ${item.alcohol.wisky ? "віскі" : ""}`}
                  </ItemText>
                </Item>
              );
            })}
          </Table>
        </Container>
      </TableWrapper>
    </>
  );
};

const TableWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
  padding: 30px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 46px;
  color: #000000;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 53px;

  @media (max-width: 768px) {
    font-size: 27px;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-collapse: collapse;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black;
  border-collapse: collapse; */
`;

const ItemText = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid black;
  border-collapse: collapse;

  @media (max-width: 768px) {
    width: 121px;
  }
`;
