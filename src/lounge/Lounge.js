import { Link } from "react-router-dom";
import drinks from "./images/drinks.gif";

function Lounge() {
  return (
    <div>
      <h1>Welcome to the New and Improved Head First Lounge</h1>
      <img src={drinks} />
      <p>
        Join us any evening for refreshing
        <Link to="beverages/elixir.html">elixirs</Link>, conversation and maybe
        a game or two of <em>Dance Dance Revolution</em>. Wireless access is
        always provided; BYOWS (Bring your own web server).
      </p>
      <h2>Directions</h2>
      <p>
        You'll find us right in the center of downtown Webville. If you need
        help finding us, check out the
        <Link to="about/directions.html">detailed directions</Link>. Come join
        us!
      </p>
    </div>
  );
}
export default Lounge;
