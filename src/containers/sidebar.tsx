import { RiAddBoxLine, RiFileListLine } from "react-icons/ri";

import { Nav } from "components";

import { route } from "constants/routes";
import { TiPowerOutline, TiUserOutline } from "react-icons/ti";

export default function Sidebar() {
  return (
    <Nav>
      <Nav.NavSection>
        <Nav.Title title="Chamados" />
        <Nav.Link
          label="Todos"
          to={route.APP.CALLEDS.ALL}
          icon={<RiFileListLine />}
        />
        <Nav.Link
          label="Abrir"
          to={route.APP.CALLEDS.NEW}
          icon={<RiAddBoxLine />}
        />
      </Nav.NavSection>

      <Nav.NavSection>
        <Nav.Title title="Clientes" />
        <Nav.Link
          label="Todos"
          to={route.APP.CUSTOMERS.ALL}
          icon={<RiFileListLine />}
        />
        <Nav.Link
          label="Abrir"
          to={route.APP.CUSTOMERS.NEW}
          icon={<RiAddBoxLine />}
        />
      </Nav.NavSection>

      <Nav.NavSection>
        <Nav.Title title="Configurações" />
        <Nav.Link
          label="Perfil"
          to={route.APP.PROFILE}
          icon={<TiUserOutline />}
        />
        <Nav.Link
          label="Sair"
          to={route.LOGIN.SIGNIN}
          icon={<TiPowerOutline />}
        />
      </Nav.NavSection>
    </Nav>
  );
}
