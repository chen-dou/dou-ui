import React from 'react';
import Button from './components/button/button';
import './App.css';
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button onClick={this.handleBtn} disabled={true}>按钮</Button>
//         Learn React
//       </header>
//     </div>
//   );
// }
class App extends React.Component{
  handleBtn(){
    console.log('handleBtn')
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={()=>this.handleBtn()}>原生按钮</button>
          <Button onClick={()=>this.handleBtn()} disabled={false}>按钮</Button>
          Learn React
        </header>
      </div>
    );
  }
}
export default App;
