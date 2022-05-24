import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import ProtectedRoute from "./components/protected-route";
import { UserAuthContextProvider } from "./context/user-auth-context";
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
