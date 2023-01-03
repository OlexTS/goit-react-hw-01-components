import styled from '@emotion/styled'

export const UserProfile = styled.div`
min-width: 30vw;
  padding: 30px 20px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  align-items: center;
  background-color: hsla(175, 36%, 60%, 0.3);
  border-radius: 20px;
  border: 2px solid rgb(153, 113, 52);
  box-shadow: 10px 10px 10px 0px #cab1b14d;`

export const Description = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  border: 2px solid rgb(119, 83, 83);
  border-radius: 20px;
  background-color: azure;
  box-shadow: black;`

export const UserName = styled.p`
    font-size: 28px;
  font-weight: 700;
`

export const Tag = styled.p`
    font-size: 20px;
  font-weight: 500;
`

export const Location = styled.p`
    font-size: 20px;
  font-weight: 500;
`
export const StatList = styled.ul`
    padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;
  align-items: center;
`
export const Label = styled.span`
    margin-bottom: 10px;
  display: block;
  font-size: 20px;
  font-weight: 500;
`
export const Quantity = styled.span`
      font-weight: 500;

`