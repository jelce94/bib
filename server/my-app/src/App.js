import React from 'react';
import logo from './logo.svg';
import './App.css';


const bibMaitre  =  require('./bib_maitre');
const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];

function App() {
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {people.filter(person => person.age < 60).map(filteredPerson => (
    <li>
      {filteredPerson.name}
      {filteredPerson.age}
    </li>
  ))}
  <div>
      {names.filter(name => name.includes('J')).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
    </div>
    <div>
      {bibMaitre.filter(restau => restau.name.includes('L')).map(filteredRestau => (
        <li>
          {filteredRestau.name}
        </li>
      ))}
    </div>
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      </div>
  );
} 

export default App;

/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  //bibRestaurants = require('./src/bib_maitre.json');

  componentDidMount() {
    // I will use fake api from jsonplaceholder website
    // this return 100 posts 
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then( response => response.json())
    .then(
        // handle the result
        (result) => {
            this.setState({
                isLoaded : true,
                posts : result
            });
        },

        // Handle error 
        (error) => {
            this.setState({
                isLoaded: true,
                error
            })
        },
    )
  }

  render() {
    
      const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
          
    );
  }
}

export default App;*/
/*
import React, { Component } from 'react';
import './style.css';

const bib = require('./bib_maitre.json');

class GetData extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
          <div id="div1">
            <table>
              <h1>Restaurants with Bib Gourmand distinction</h1>
              {
                bib.map(
                  restau => {
                    <tr>
                      <td>
                        {restau.name}
                      </td>
                    </tr>
                  }
                )
              }
            </table>
          </div>
      </div>
    );
  }
}

export GetData;*/