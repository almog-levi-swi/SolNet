import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login.js";
import Signup from "./components/signup/Signup.js";
import Dashboard from "./components/dashboard/Dashboard.js";
import ProtectedRoute from "./components/protected-route.js";
import { UserAuthContextProvider } from "./context/user-auth-context.js";
function App() {
  return (
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
  );
}

export default App;
