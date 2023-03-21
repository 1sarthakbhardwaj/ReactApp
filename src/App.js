import './App.css';

function App() {
  // Only number string are fine, not for boolean and objects
  const title = 'Welcome to the new blog';
  const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>You got {likes} likes</p>
        <p>random number is {Math.random() * 100}</p>
      </div>
    </div>
  );
}

export default App;
