import { memo } from "react";

import Header from "components/Header";

import "./styles.scss";
import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = memo(() => {
  console.log("layout");
  return (
    <section className="layout-grid">
      <Header />
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </section>
  );
});

export default Layout;
