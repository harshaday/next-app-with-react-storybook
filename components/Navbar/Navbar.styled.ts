import styled from "styled-components";

const HeaderWrapper = styled.header`
  position: relative;
  background-color: #e95a68;
  margin-bottom: 2rem;

  .navHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 100%;
    padding-left: 4rem;
    padding-right: 4rem;
    margin-left: auto;
    margin-right: auto;
  }

  .navHeader a {
    text-decoration: none;
    color: white;
  }

  .brand {
    font-weight: bold;
    font-size: 20px;
  }

  .navWrapper {
    display: flex;
    list-style-type: none;
  }

  .navItem a {
    display: block;
    padding: 1rem;
  }
`;

export default HeaderWrapper;
