import React from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import DragAndDropContainer from './Components/DragAndDrop/DragAndDropContainer';
import HomepageContainer from './Components/HomePage/HomepageContainer';
import DrawingContainer from './Components/Drawing/DrawingContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'

function App() {
  return (
    <div className="App">     
      <HeaderContainer />
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/picking-apples/" component={DragAndDropContainer} />
      <Route path="/drawing/" component={DrawingContainer} />
      <Route path="/profile/" component={ProfileContainer} />
    </div>
  );
}

export default App;
