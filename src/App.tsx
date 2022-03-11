import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { AppRoutes } from "routes";

import { GlobalStyles } from "styles/global-styles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <AppRoutes />
      <ToastContainer autoClose={3000} theme="colored" icon={false} />
    </Router>
  );
}

export default App;
