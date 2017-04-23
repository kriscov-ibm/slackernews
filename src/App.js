import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'http://kriscoverdale.com',
    author: 'Kris Coverdale',
    num_comments: 9,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactsjs/redux',
    author: 'Dan Abramov, Andrew Clarke',
    num_comments: 5,
    points: 5,
    objectID: 1,
  },
];
class App extends Component {
  render() {
    return (
      <div className="App">
        { list.map(function(item) {
          return (
            <div key={item.objectID}>
              <span><a href={item.url}>{item.title}</a></span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
