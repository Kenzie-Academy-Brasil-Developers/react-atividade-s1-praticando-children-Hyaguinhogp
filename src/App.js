import './App.css';
import CenteredCard from './components/CenteredCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <h1>Opa</h1>
        </CenteredCard>

        <CenteredCard>
          <h2>Agora vai</h2>
          <h3>Agora foi</h3>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
