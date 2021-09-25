import { Link } from "react-router-dom";

import green from "../images/green.jpg";
import lightblue from "../images/lightblue.jpg";
import blue from "../images/blue.jpg";
import red from "../images/red.jpg";

function Elixer() {
  return (
    <div>
      <h1>Our Elixirs</h1>

      <h2>Green Tea Cooler</h2>
      <p>
        <img src={green} />
        Chock full of vitamins and minerals, this elixir combines the healthful
        benefits of green tea with a twist of chamomile blossoms and ginger
        root.
      </p>
      <h2>Raspberry Ice Concentration</h2>
      <p>
        <img src={lightblue} />
        Combining raspberry juice with lemon grass, citrus peel and rosehips,
        this icy drink will make your mind feel clear and crisp.
      </p>
      <h2>Blueberry Bliss Elixir</h2>
      <p>
        <img src={blue} />
        Blueberries and cherry essence mixed into a base of elderflower herb tea
        will put you in a relaxed state of bliss in no time.
      </p>
      <h2>Cranberry Antioxidant Blast</h2>
      <p>
        <img src={red} />
        Wake up to the flavors of cranberry and hibiscus in this vitamin C rich
        elixir.
      </p>
      <p>
        <Link to="../lounge.html">Back to the lounge.</Link>
      </p>
    </div>
  );
}
export default Elixer;
