import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>

          <li>
            <Link to="/depoiments">Depoimets </Link>
          </li>
          <li>
            <Link to="/contacts">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
