import Navbar from './Navbar';
import Home from './Home';

function App() {
  // Only number string are fine, not for boolean and objects


  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
