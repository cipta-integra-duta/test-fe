import './App.css';
import axios from 'axios';
function App() {
  axios.get("http://localhost:8000/users").then(res => {
    console.log(res);
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Start Editing to see magic happen!
        </p>
      </header>
      <section id="content">
        your code here
      </section>
    </div>
  );
}

export default App;
