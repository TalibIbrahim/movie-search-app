import './App.css';
import React from 'react';
import NavBar from './components/UI/NavBar';
import SearchInput from './components/UI/SearhInput';
import Container from './components/UI/Container';



function App() {

  const searchHandler = (searchInput) => {
    console.log(searchInput);
    console.log('This is being done in the App.js file' , searchInput);
  }
  
  return (
    <Container>
      <NavBar />
      <SearchInput onSearch={searchHandler}  />
    </Container>
     
  );
}

export default App;
