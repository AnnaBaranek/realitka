import "./Header.css";

export const Header = (props) => {
  return (
    <nav className="header">
      <ul>
        <li>
          <a href={props.odkaz1}>{props.label1}</a>
        </li>
        <li>
          <a href={props.odkaz2}>{props.label2}</a>
        </li>
        <li>
          <a href={props.odkaz3}>{props.label3}</a>
        </li>
        <li>
          <a href={props.odkaz4}>{props.label4}</a>
        </li>
      </ul>
    </nav>
  );
};
