import styled from 'styled-components';
import Search from '../../Shared/Search/Search';


const SearchForm = styled.div`
margin: 0 auto 0 auto;
@media (min-width: 482px) {
  max-width: 449px;
}

@media (min-width: 701px) {
  max-width: 668px;
}

@media (min-width: 1026px) {
  max-width: 946px;
}
> h1 {
  color: #7D7B6D;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;
  margin-top: 34px;
  margin-bottom: 24px;
  @media (max-width: 701px) {
    margin-top: 100px;
  }
}
> form {
  background-color: #7D7B6D;
  border: 1px solid #e9eced;
  border-radius: 4px;
  padding: 32px 72px 40px;
  margin-bottom: 40px;
  margin: auto;
  @media (max-width: 701px) {
    border: none;
  }
  > input {
    width: 100%;
    background-color: #fff;
    border: 1px solid #d3d4d5;
    border-radius: 4px;
    padding: 13px 15px;
    font-size: 16px;
    vertical-align: middle;
    line-height: 24px;
    margin: 0 0 5px;
  }
  > label {
    color: #FFE033;
    display: block;
    margin: 4px 0 4px 0;
    font-weight: 700;
  }
  > p {
    text-align: center;
    margin-top: 16px;
    font-size: 12px;
    line-height: 18px;
  }
  > button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
    line-height: 24px;
    font-size: 16px;
    font-weight: 700;
    margin: 10px 0 0 0;
    user-select: none;
    border-radius: 4px;
    padding: 12px 22px;
    overflow: visible;
    background-color: #FFE033;
    border: 2px solid transparent;
    color: #7D7B6D;
  }
  > div {
    display: flex;
    align-items: center;
    font-weight: 400;
    color: #676d73;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  a {
    color: #009fd9;
    fill: #009fd9;
    cursor: pointer;
  }
}
`;

function Main() {
  console.log("****Mina");
    return (
      <SearchForm>
        <h1>Find a service provider.</h1>
        <form className="search">
        <label htmlFor="provider">Search for a service provider:</label>
        <Search
        />
        <button type="submit">Search</button>
    </form>
    </SearchForm>
    )
  }
  
  export default Main;