import { Outlet } from "react-router-dom";

import { Sidebar } from "components/Navigation/Sidebar";
import Header from "components/Header";

import "./styles.scss";

const Layout = () => {
  return (
    <>
      <Header />
      <section className="wrapper-layout">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Layout;
