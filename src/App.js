import React from 'react';
import Postform from './components/PostForm'
import Posts from './components/Posts'
import {FetchedPosts} from './components/FetchedPosts'


function App() {
  return (
    <div className="container">
      <div className = "row">
        <div className="col">
          <Postform />
        </div>
      </div>
      <div className ="row mt-5">
        <div className="col-6">
        <h2>sync</h2>
          <Posts/>
        
        </div>
      
        <div className="col">
        <h2>async</h2>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
