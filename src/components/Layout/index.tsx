import { memo } from "react";
import { Outlet } from "react-router-dom";

import Header from "components/Header";

import "./styles.scss";

const Layout = memo(() => {
  console.log("layout");
  return (
    <section className="layout-grid">
      <Header />
      <aside>Sidebar</aside>
      <div className="content">
        <Outlet />
      </div>
    </section>
  );
});

export default Layout;
