import logo from './logo2.png';
import './App.css';

function Button() {
  const handleClick = () => {
    alert("Manchester United won by 2-0");
  };

  return <button onClick={handleClick}>AGREED</button>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo2" />
        <p>
          MAN U 2 - 0 NOTTINGHAM FOREST <br></br>
          FOREVER MAN U!
        </p>
        <Button/>
      </header>
    </div>
    
  );

}


export default App;
