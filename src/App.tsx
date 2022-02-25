import Login from "pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <Login />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
