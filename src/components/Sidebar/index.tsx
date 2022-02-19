import Logo from "components/Logo";
import Navigation from "./Navigation";
import "./styles.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Logo />
      <Navigation />
    </aside>
  );
};

export default Sidebar;
