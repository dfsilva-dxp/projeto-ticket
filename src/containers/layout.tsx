import { Outlet } from "react-router-dom";

import { Layout, Loading } from "components";

import { HeaderContainer, Sidebar } from "containers";

import useFirebase from "hooks/useFirebase";

export default function LayoutContent() {
  const { loading } = useFirebase();

  return (
    <>
      <HeaderContainer />
      <Layout>
        <Sidebar />
        <Layout.Content>
          {loading ? (
            <Loading>
              <Loading.Spinner size="md" />
            </Loading>
          ) : (
            <Outlet />
          )}
        </Layout.Content>
      </Layout>
    </>
  );
}
