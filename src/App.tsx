import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AuthContextProvider } from "contexts/auth";
import { AppRoutes } from "routes";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppRoutes />
        <ToastContainer autoClose={3000} />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
