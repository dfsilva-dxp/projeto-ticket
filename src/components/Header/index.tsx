import { TiPlus } from "react-icons/ti";

import Avatar from "components/Avatar";
import Button from "components/Button";
import SearchInput from "components/SearchInput";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <SearchInput placeholder="Buscar na plataforma" />

      <Button
        type="button"
        size="small"
        btnStyle="round"
        color="gray"
        icon={<TiPlus />}
      >
        Novo Chamado
      </Button>
      <Avatar />
    </div>
  );
};

export default Header;
