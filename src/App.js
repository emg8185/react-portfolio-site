import logo from './logo.svg';
import './App.css';

const NameText = (props) => {
  return (
    <p>Hi, {props.name}!</p>
  )
}

const App = () => {
  return (
    <div>
      <NameText name="Jack"></NameText>
      <NameText name="Mary"></NameText>
    </div>
  )
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
