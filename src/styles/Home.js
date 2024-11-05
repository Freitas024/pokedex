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
  box-shadow: 0px 0px 12px 0px rgba(250, 250, 250, .87);
  width: 500px;
  height: 500px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`;