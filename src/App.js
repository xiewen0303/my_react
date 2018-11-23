import React, { Component } from 'react';
// import ShoppingList from './ch02/ShoppingList';
import Game from './ch01/Game';

// const user = {
//   firstName:'Harper', 
//   lastName:'Perez'
// };function formateName(user){
//     return user.firstName + ' ' + user.lastName;
// }

// const element = (
//   <h1>
//     Hello,{formateName(user)}!
//   </h1>
// );

// const sList = (<ShoppingList/>);

// const sBoard = (<Board>);
let game = (<Game/>);


class App extends Component {
  render() {
    return React.createElement('div',{className:'shopping-list'},game);
    // return element;
  }
}

export default App;