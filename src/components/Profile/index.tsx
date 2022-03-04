import { FormEvent, useEffect, useRef } from "react";
import { TiMail, TiUserOutline } from "react-icons/ti";

import useAuth from "hooks/useAuth";
import useProfile from "hooks/useProfile";

import { Head } from "components/Head";
import Title from "components/Title";
import { Input } from "components/Input";
import Button from "components/Button";

import "./styles.scss";

const ProfileContent = () => {
  const nameElRef = useRef<HTMLInputElement>(null);
  const emailElRef = useRef<HTMLInputElement>(null);

  const { user } = useAuth();
  const { url, save, changeFileAndUrl } = useProfile();

  useEffect(() => {
    if (nameElRef.current) {
      nameElRef.current.value = user?.displayName as string;
    }

    if (emailElRef.current) {
      emailElRef.current.value = user?.email as string;
      emailElRef.current.readOnly = true;
    }
  }, [user]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (user) {
      const { uid } = user;
      save(uid, nameElRef.current!.value);
    }
  }

  return (
    <>
      <Head
        title="Perfil | Meus chamados"
        description="Editar perfil do usuário"
      />

      <Title label="Perfil" />

      <div className="jumbotron">
        <form onSubmit={handleSubmit}>
          <div
            className="wrapper-photo"
            style={{
              backgroundImage: !!url
                ? `url(${url})`
                : !!user?.photoURL
                ? `url(${user?.photoURL})`
                : "",
            }}
          >
            {!!!url && !!!user?.photoURL && <TiUserOutline />}

            <label>
              <small>Editar</small>
              <input
                type="file"
                accept="image/*"
                className="display-none"
                onChange={changeFileAndUrl}
              />
            </label>
          </div>

          <div className="imput-group">
            <Input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Seu nome"
              icon={<TiUserOutline />}
              ref={nameElRef}
            />
            <Input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Seu e-mail"
              icon={<TiMail />}
              ref={emailElRef}
            />
          </div>
          <Button type="submit" btnStyle="square">
            Salvar
          </Button>
        </form>
      </div>
    </>
  );
};

export default ProfileContent;
