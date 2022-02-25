import Header from "components/Header";
import { memo } from "react";
import { Outlet } from "react-router-dom";

import "./styles.scss";

const Layout = memo(() => {
  console.log("Layout");
  return (
    <section className="layout-grid">
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </section>
  );
});

export default Layout;
