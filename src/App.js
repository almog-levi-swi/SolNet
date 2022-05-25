import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.js";
import Signup from "./components/signup/Signup.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import ProtectedRoute from "./components/protected-route.js";
import { UserAuthContextProvider } from "./context/user-auth-context.js";
import { Card } from 'antd';
function App() {
  return (

    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '10px', backgroundColor: 'white', margin: '3%' }}>
                  <Dashboard />
                </Card>
              </ProtectedRoute>
            }
          />
          <Route path="/" element={
            <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '10px', backgroundColor: 'white', margin: '10% 37%' }}>
              <Login />
            </Card>
          } />
          <Route path="/signup" element={
            <Card style={{ padding: '30px', borderRadius: '10px', backgroundColor: 'white', margin: '3% 30%' }}>
              <Signup />
            </Card>
          } />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;

