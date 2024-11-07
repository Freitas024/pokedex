import styled from "styled-components";

export const Wrapper = styled.main`
  width: calc(100vw - 18px);
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin: 100px 0px 30px 0px;
  }

  h4 {
    margin: 0px 0px 30px 0px;
  }

  input {
    width: 50%;
    padding: 12px;
    border: 2px solid #7d3f98;
    border-radius: 6px;
    background-color: #141414;
    margin-bottom: 36px;
    &::placeholder {
      color: rgba(250, 250, 250, 0.87);
    }
  }
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 50px 72px;

  width: 90vw;
  height: 80vh;

  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }

  li > h4 {
    margin-bottom: 12px;
  }

  li > p {
    color: #fff;
    font-weight: 700;
    border: none;
    border-radius: 6px;
    padding: 6px 12px;
    margin: 0px 0px 12px 0px;
  }

  li > button {
    background-color: #232323;
    padding: 12px 12px;
    border: solid 3px #7d3f98;
    border-radius: 6px;

    cursor: pointer;

    width: 12rem;
  }
`;


export const Ol = styled.ol`
  background-color: #232323;
  box-shadow: 0px 0px 6px 0px #7d3f98;
  width: 500px;
  height: 300px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  display: flex;
  align-items: center;
  flex-direction: column;

  button {
    width: 2.5rem;
    height: 2.5rem;
    margin: 24px 0px 0px 400px;

    background-color: #232323;
    color: #7d3f98;
    font-weight: 800;
    font-size: large;
    border: 3px solid #7d3f98;
    border-radius: 6px;

    cursor: pointer;
  }

  h2 {
    font-size: large;
    font-weight: 700;

    position: relative;
    top: -90px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  li {
    list-style-type: none;
    font-size: medium;
    font-weight: 600;
    position: relative;
    top: -100px;

    width: 70%;
    margin: 12px 0px;
    display: flex;
    justify-content: start;
  }
`;