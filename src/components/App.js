import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getMovies, deleteFn, addFn} from '../actions/movies.js';
import Item from './Item.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    // if (this.props.mylist.length == 0 && this.props.recommendations.length == 0){
    if (this.props.mylist.length == 0 && this.props.recommendations.length == 0){
      this.props.dispatch(getMovies());
    }
  }
  removeFromList = (movie) => {
    this.props.dispatch(deleteFn(movie))
  }
  addToListFn = (movie) => {
    this.props.dispatch(addFn(movie))
  }

  render() {
      var list = [];
      for (var i = 0; i < this.props.mylist.length; i++) {
        list.push(<Item action={'Remove'} detail={this.props.mylist[i]} onRemove={this.removeFromList} />)
      }
      var recommend = [];
      for (var i = 0; i < this.props.recommendations.length; i++) {
        recommend.push(<Item action={'Add'} detail={this.props.recommendations[i]} onRemove={this.addToListFn} />)
      }
      return (
        <div className="App">
          <div className="navbar navbar-inverse">
                  <div className="container-fluid">
                      <div className="navbar-header">
                      <a className="navbar-brand" href="#">Netflix</a>
                      </div>
                  </div>
          </div>
            <div className="row" style={{backgroundColor: "#222"}} className="panel panel-custom panel-default">
              <div className="panel-heading" style={{backgroundColor: "#222", color: "white"}}>My List</div>
              <div className="panel-body">{list}</div>
            </div>
            <div className="row" style={{backgroundColor: "#222"}} className="panel panel-default">
              <div className="panel-heading" style={{backgroundColor: "#222", color: "white"}}>Recommendations</div>
              <div className="panel-body">{recommend}</div>
            </div>
        </div>
      );
  }
}

function mapStateToProps({mylist, recommendations}) {
    return {
        mylist,
        recommendations
    };
}

export default connect(mapStateToProps)(App);