import "./App.css";
import KosarKezelo from "./components/KosarKezelo";
import { WebProvider } from "./context/ApiContext";
import { KosarProvider } from "./context/KosarContext";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h3>Books</h3>
      </header>
      <main className="App-main">
        <WebProvider>
          <KosarProvider>
            <KosarKezelo />
          </KosarProvider>
        </WebProvider>
      </main>
    </div>
  );
}

export default App;
