import styled from "styled-components";
const Form = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  h2 {
    text-align: center;
    font-weight: bold;
    width: 100%;
  }
  form {
    width: 40%;
    background-color: #f7f7f7;
    padding: 10px;
    box-shadow: 1px 1px 8px 1px;
  }
  label {
    font-size: 22px;
    font-weight: 500;
    color: #363636;
  }
  select {
    width: 100%;
    padding: 16px 20px;
    border: none;
    border-radius: 4px;
    background-color: #f1f1f1;
  }
  input[type="text"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 3px solid #ccc;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    outline: none;
  }
  input[type="text"]:focus {
    border: 3px solid #555;
  }
  textarea {
    width: 100%;
  }
  button {
    background-color: #4caf50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
`;
export default Form;
