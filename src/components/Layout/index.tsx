import { Outlet } from "react-router-dom";

import { Sidebar } from "components/Navigation/Sidebar";

import "./styles.scss";
import { HeaderContainer } from "containers";

const Layout = () => {
  return (
    <>
      <HeaderContainer />
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
