import profile from "../../assets/citu_logo.png";
import NavigationButton from "../UI/Navigation/NavigationButton.jsx";
import Navigation from "../UI/Navigation/Navigation.jsx";

const dashb = "dashboard";
const mng = "manage";

export default function Header({ onSelect, selected }) {
  return (
    <header className="header">
      <img className="header-profile" alt="user profile" src={profile} />
      <Navigation>
        <NavigationButton
          isSelected={selected === dashb}
          onSelect={() => onSelect(dashb)}
        >
          Dashboard
        </NavigationButton>
        <NavigationButton
          isSelected={selected === mng}
          onSelect={() => onSelect(mng)}
        >
          Manage
        </NavigationButton>
      </Navigation>
      <button className="settings" />
    </header>
  );
}
