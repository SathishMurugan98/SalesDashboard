import React from "react";
import "./App.css"
import MainContainer from "./components/centercontent/MainContainer";
import LeftSidebar from './components/leftsidebar/LeftSidebar';
import RightContainer from './components/rightcontent/RightContainer';

function App() {
  return (
    <div className="comp-container">
      <LeftSidebar />
      <MainContainer />
      <RightContainer />
    </div>
  );
}

export default App;
