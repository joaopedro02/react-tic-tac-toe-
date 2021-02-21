import React from 'react'
import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
// import Button from "@material-ui/core/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Joao Pedro 
        </p>
        <Game/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>           */}
      </header>
    </div>
  );
}

class Square extends React.Component {
  render (){
    return(
      <button className='square'>{}</button>
    );
  }
}

class Board extends React.Component{
  renderSquare(i){
    return <Square/>;
  }

  render (){
    const status='player 1';

    return(
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <div>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
        </div>
        <div>
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
        </div>
        <div>
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    </div>
  );
  }
}

class Game extends React.Component{
  render(){
    return(
      <div className='game'>
        <div className='game-board'>
          <Board/>
        </div>
        <div className='game-info'>
          <div>{/*status*/}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

// export default game;
export default App;
