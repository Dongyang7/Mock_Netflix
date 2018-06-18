import React, { Component } from 'react';
import Item from './Item.js';
import Recommendation from './Recommendation.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      mylist : [
        {
          'title': 'Futurama',
          'id': 1,
          'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
        },
        {
          'title': 'The Interview',
          'id': 2,
          'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
        },
        {
          'title': 'Gilmore Girls',
          'id': 3,
          'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
        }
      ],
      recommendations : [
        {
          'title': 'Family Guy',
          'id': 4,
          'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
        },
        {
          'title': 'The Croods',
          'id': 5,
          'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
        },
        {
          'title': 'Friends',
          'id': 6,
          'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
        }
      ]
  }
  removeFromList = (movie) => {
    this.setState((state)=>{
      return {
        mylist: state.mylist.filter((item, index)=>{
          if (item.id!=movie.id) {
            return true;
          }
        })
      }
    })
  }
  addToListFn = (movie) => {
    this.setState((state)=>{
      return {
        recommendations: state.recommendations.filter((item, index)=>{
          if (item.id!=movie.id) {
            return true;
          }
        }),
        mylist: state.mylist.concat(movie)
      }
    })
  }
  render() {
    var list = [];
    for (var i = 0; i < this.state.mylist.length; i++) {
      list.push(<Item detail={this.state.mylist[i]} onRemove = {this.removeFromList} />)
    }
    var recommend = [];
    for (var i = 0; i < this.state.recommendations.length; i++) {
      recommend.push(<Recommendation detail={this.state.recommendations[i]} addToList={this.addToListFn} />)
    }
    return (
      <div className="App">
        <div className="row" className="panel panel-default">
          <div className="panel-heading">My List</div>
          <div className="panel-body">{list}</div>
        </div>
        <div className="row" className="panel panel-default">
          <div className="panel-heading">Recommendations</div>
          <div className="panel-body">{recommend}</div>
        </div>
      </div>
    );
  }
}

export default App;
