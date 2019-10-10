import React from 'react';
import './App.css'
import { Route } from 'react-router-dom'

import DragAndDropContainer from './Components/DragAndDrop/DragAndDropContainer';
import HomepageContainer from './Components/HomePage/HomepageContainer';
import DrawingContainer from './Components/Drawing/DrawingContainer'

function App() {
  return (
    <div className="App">     
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/picking-apples/" component={DragAndDropContainer} />
      <Route path="/drawing/" component={DrawingContainer} />
    </div>
  );
}

export default App;
