
import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import {originals,action,thriller,animation} from './Urls'
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={thriller} title='Thriller' isSmall />
      <RowPost url={animation} title='Animation' isSmall />
    </div>
  );
}

export default App;
