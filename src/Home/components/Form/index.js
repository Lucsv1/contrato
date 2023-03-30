import styled from "styled-components";

export const DivBase = styled.div`
  display: flex;
  justify-content: center;
  
  h2 {
    margin-top: 50px;
    position: absolute;
  }

  p {
    position: absolute;
    margin-top: 80px;
  }
`;

export const DivForm = styled.form`
  margin-top: 150px;
  margin-bottom: 150px;
  box-shadow: 0px 2px 5px 0px #4e4a4a3f;
  border-radius: 10px;
  padding: 30px;
  width: 30%;
`;

export const PlaceForm = styled.form`
  margin: 24px 0;
`;

export const PlaceLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  color: #000000;
`;

export const PlaceInput = styled.input`
  border: none;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0px 2px 5px 0px #4e4a4a2e;
  box-sizing: border-box;
  width: 100%;
  height: 50px;
  font-size: 20px;
  padding: 20px;
`;
