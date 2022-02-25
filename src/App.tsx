import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppRoutes } from "routes";

function App() {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
