import React from 'react';
import { Route } from 'react-router-dom'
import DragAndDropContainer from './Components/DragAndDrop/DragAndDropContainer';
import HomepageContainer from './Components/HomePage/HomepageContainer';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomepageContainer} />
      <Route path="/picking-apples/" component={DragAndDropContainer} />
    </div>
  );
}

export default App;
