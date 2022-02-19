import { memo } from "react";

import Header from "components/Header";

import { LayoutProps } from "./types";

import "./styles.scss";

const Layout = memo(({ children }: LayoutProps) => {
  console.log("Layout");
  return (
    <section className="layout-grid">
      <Header />
      <aside>Menu</aside>
      <div className="content">{children}</div>
    </section>
  );
});

export default Layout;
