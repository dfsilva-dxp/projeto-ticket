import { RiAddBoxLine, RiFileListLine } from "react-icons/ri";
import { TiPowerOutline, TiUserOutline } from "react-icons/ti";

import NavSection from "../NavSection";
import NavLinks from "../NaviLink";

import "./styles.scss";
import { route } from "constants/routes";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavSection title="Chamados">
        <NavLinks
          label="Todos"
          href={route.APP.TICKETS}
          icon={<RiFileListLine />}
        />
        <NavLinks
          label="Abrir"
          href={route.APP.TICKETS}
          icon={<RiAddBoxLine />}
        />
      </NavSection>
      <NavSection title="Clientes">
        <NavLinks
          label="Todos"
          href={route.APP.CUSTOMERS}
          icon={<RiFileListLine />}
        />
        <NavLinks
          label="Novo"
          href="/new-transaction"
          icon={<RiAddBoxLine />}
        />
      </NavSection>
      <NavSection title="Configurações">
        <NavLinks
          label="Perfil"
          href={route.APP.PROFILE}
          icon={<TiUserOutline />}
        />
        <span>
          <TiPowerOutline /> Sair
        </span>
      </NavSection>
    </div>
  );
};
