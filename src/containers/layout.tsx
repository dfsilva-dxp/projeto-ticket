import { Outlet } from "react-router-dom";

import { Layout } from "components";

import { HeaderContainer } from "containers";
import Sidebar from "./sidebar";

export default function LayoutContent() {
  return (
    <>
      <HeaderContainer />
      <Layout>
        <Sidebar />
        <Layout.Content>
          <Outlet />
        </Layout.Content>
      </Layout>
    </>
  );
}
