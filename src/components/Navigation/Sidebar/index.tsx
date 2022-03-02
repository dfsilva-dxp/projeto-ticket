import { RiAddBoxLine, RiFileListLine } from "react-icons/ri";
import { TiPowerOutline, TiUserOutline } from "react-icons/ti";

import NavSection from "../NavSection";
import NavLinks from "../NaviLink";

import useAuth from "hooks/useAuth";
import { route } from "constants/routes";

import "./styles.scss";

export const Sidebar = () => {
  const { signOut } = useAuth();

  return (
    <div className="sidebar">
      <NavSection title="Chamados">
        <NavLinks
          label="Todos"
          href={route.APP.CALLEDS.ALL}
          icon={<RiFileListLine />}
        />
        <NavLinks
          label="Abrir"
          href={route.APP.CALLEDS.ALL}
          icon={<RiAddBoxLine />}
        />
      </NavSection>
      <NavSection title="Clientes">
        <NavLinks
          label="Todos"
          href={route.APP.CUSTOMERS.ALL}
          icon={<RiFileListLine />}
        />
        <NavLinks
          label="Novo"
          href={route.APP.CUSTOMERS.NEW}
          icon={<RiAddBoxLine />}
        />
      </NavSection>
      <NavSection title="Configurações">
        <NavLinks
          label="Perfil"
          href={route.APP.PROFILE}
          icon={<TiUserOutline />}
        />
        <span onClick={signOut}>
          <TiPowerOutline /> Sair
        </span>
      </NavSection>
    </div>
  );
};
