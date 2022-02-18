import { LayoutProps } from "./types";

import "./styles.scss";
import { Header } from "components/Header";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <section className="layout-grid">
      <Header />
      <aside>Menu</aside>
      <div className="content">{children}</div>
    </section>
  );
};
