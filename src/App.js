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

const isSearched = (searchTerm) => (item) =>
 !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

function Search ({ value, onChange, children }) {
  return (
    <form>
      {children}
      <input type="text" value={value} onChange={onChange} />
    </form>
  );
}

function Table ({ list, pattern, onDismiss }) {
  return (
    <div>
      {
        list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span><a href={item.url}>{item.title}</a></span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
            </span>
          </div>
      )}
    </div>
  );
}

function Button ({ onClick, className = '', children }) {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    //returns a new list.  Filters out the id that was passed in.
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  render() {
    const { searchTerm, list } = this.state;
    return (
      <div className="App">
        <Search
          value={searchTerm}
          onChange={this.onSearchChange}
        >
        Search
        </Search>
        <Table
          list={list}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />

      </div>
    );
  }
}

export default App;
