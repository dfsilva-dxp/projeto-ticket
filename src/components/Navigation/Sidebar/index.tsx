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
        <span>
          <TiPowerOutline /> Sair
        </span>
      </NavSection>
    </div>
  );
};
