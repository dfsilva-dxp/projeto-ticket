import { TiMail, TiUserOutline } from "react-icons/ti";

import { Avatar, Form, Input, PageTitle, Profile } from "components";

import useFirebase from "hooks/useFirebase";
import { FormEvent, useRef } from "react";
import useProfile from "hooks/useProfile";

type ProfileContainerProps = {
  title: string;
};

export default function ProfileContainer({ title }: ProfileContainerProps) {
  const nameElRef = useRef<HTMLInputElement>(null);

  const { user } = useFirebase();
  const { url, loading, save, changeFileAndUrl } = useProfile();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (user) {
      const { uid } = user;
      save(uid, nameElRef.current!.value);
    }
  }

  return (
    <>
      <PageTitle label={title} />

      <Profile>
        <Profile.Photo>
          <Avatar>
            <Avatar.Wrapper size="large">
              <Avatar.Editor>
                <span>editar foto</span>
                <Avatar.File
                  type="file"
                  accept="image/*"
                  onChange={changeFileAndUrl}
                />
              </Avatar.Editor>

              <Avatar.Photo
                photoURL={!!url ? url : !!user?.photoURL ? user.photoURL : ""}
              >
                <TiUserOutline />
              </Avatar.Photo>
            </Avatar.Wrapper>
          </Avatar>
        </Profile.Photo>

        <Profile.Form>
          <Form.Base onSubmit={handleSubmit}>
            <Form.Inline>
              <Input
                type="text"
                name="name"
                id="name"
                defaultValue={user?.displayName as string}
                required
                placeholder="Seu nome"
                icon={<TiUserOutline />}
                ref={nameElRef}
              />

              <Input
                type="email"
                name="email"
                id="email"
                defaultValue={user?.email as string}
                readOnly
                required
                placeholder="Seu e-mail"
                icon={<TiMail />}
              />
            </Form.Inline>

            <Form.Button type="submit" btnStyle="square" disabled={loading}>
              {loading ? "Loading..." : "Salvar"}
            </Form.Button>
          </Form.Base>
        </Profile.Form>
      </Profile>
    </>
  );
}
