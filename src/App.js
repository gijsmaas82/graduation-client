import React from 'react';
import './App.css'
import { Route } from 'react-router-dom'
import HeaderContainer from './Components/Header/HeaderContainer'
import DragAndDropContainer from './Components/DragAndDrop/DragAndDropContainer';
import HomepageContainer from './Components/HomePage/HomepageContainer';
import DrawingContainer from './Components/Drawing/DrawingContainer'
import ProfileContainer from './Components/Profile/ProfileContainer'
import SignUpContainer from './Components/SignUp/SignUpContainer'
import LogInContainer from './Components/LogIn/LogInContainer'

function App() {
  return (
    <div className="App">     
      <HeaderContainer />
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/picking-apples/" component={DragAndDropContainer} />
      <Route path="/drawing/" component={DrawingContainer} />
      <Route path="/profile/" component={ProfileContainer} />
      <Route path="/signup/" component={SignUpContainer} />
      <Route path="/login/" component={LogInContainer} />
    </div>
  );
}

export default App;
