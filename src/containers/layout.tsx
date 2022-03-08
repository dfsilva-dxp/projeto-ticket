import { Layout } from "components";
import { Sidebar } from "components/Navigation/Sidebar";
import { HeaderContainer } from "containers";
import { Outlet } from "react-router-dom";

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
