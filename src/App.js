import "./App.css";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Login</Button>
        <Button>Sign-up</Button>
        <Button type="dashed">Dashed Button</Button>
        <br />
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </header>
    </div>
  );
}

export default App;
