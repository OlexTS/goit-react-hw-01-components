import styled from '@emotion/styled';

export const StatisticLoad = styled.section`
  min-width: 30vw;
  padding: 30px 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  background-color: hsla(175, 36%, 60%, 0.3);
  border-radius: 20px;
  border: 2px solid rgb(153, 113, 52);
  box-shadow: 10px 10px 10px 0px #cab1b14d;
`;
export const Title = styled.h2`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 10px;
`;
export const StatList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  background-color: ${getRandomHexColor};
  border: 2px solid rgb(153, 113, 52);
  border-radius: 5px;
`;
export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
`;
export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

// Функція генерації випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
