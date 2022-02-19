import { memo } from "react";

import Header from "components/Header";

import { LayoutProps } from "./types";

import "./styles.scss";
import Sidebar from "components/Sidebar";

const Layout = memo(({ children }: LayoutProps) => {
  console.log("layout");
  return (
    <section className="layout-grid">
      <Header />
      <Sidebar />
      <div className="content">{children}</div>
    </section>
  );
});

export default Layout;
