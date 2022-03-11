import { TiUserOutline } from "react-icons/ti";

import useFirebase from "hooks/useFirebase";

import { route } from "constants/routes";

import { Avatar, Header } from "components";

export default function HeaderContent() {
  const { user } = useFirebase();

  return (
    <Header>
      <Header.Content>
        <Header.Link to={route.APP.CALLEDS.ALL}>
          <Header.Logo
            src="./assets/logo.svg"
            alt="Headset"
            title="Headset amarelo que representa o logo do app"
          />
        </Header.Link>

        <Avatar>
          <Avatar.Wrapper>
            <Avatar.Photo photoURL={user?.photoURL}>
              <TiUserOutline />
            </Avatar.Photo>
          </Avatar.Wrapper>
          <Avatar.Content>
            <Avatar.Name displayName={user?.displayName} />
            <Avatar.Email email={user?.email} />
          </Avatar.Content>
        </Avatar>
      </Header.Content>
    </Header>
  );
}
