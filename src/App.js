import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.js";
import Signup from "./components/signup/Signup.js";
import { Dashboard } from "./components/dashboard/Dashboard.js";
import ProtectedRoute from "./components/protected-route.js";
import { UserAuthContextProvider } from "./context/user-auth-context.js";
import { Card } from 'antd';
function App() {
  return (
    <Card style={{ textAlign: 'center', padding: '30px', borderRadius: '10px', backgroundColor: 'white', margin: '3%' }}>
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route
              path="/dashbord"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </Card>
  );
}

export default App;

/*
<div style={{ width: '80%', height: '50vh' }}>
      <Dashboard />
    </div>
*/