import { TiMail, TiUserOutline } from "react-icons/ti";

import { Avatar, Form, Input, PageTitle, Profile } from "components";

import useFirebase from "hooks/useFirebase";

export default function ProfileContainer() {
  const { user } = useFirebase();

  return (
    <>
      <PageTitle label="Meu Perfil" />
      <Profile>
        <Profile.Photo>
          <Avatar>
            <Avatar.Wrapper size="large">
              <Avatar.Editor>
                <span>editar foto</span>
                <Avatar.File type="file" accept="image/*" />
              </Avatar.Editor>

              <Avatar.Photo photoURL={user?.photoURL}>
                <TiUserOutline />
              </Avatar.Photo>
            </Avatar.Wrapper>
          </Avatar>
        </Profile.Photo>

        <Profile.Form>
          <Form.Base>
            <Form.Inline>
              <Input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Seu nome"
                icon={<TiUserOutline />}
              />
              <Input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Seu e-mail"
                icon={<TiMail />}
              />
            </Form.Inline>
            <Form.Button type="submit" btnStyle="square">
              Salvar
            </Form.Button>
          </Form.Base>
        </Profile.Form>
      </Profile>
    </>
  );
}
