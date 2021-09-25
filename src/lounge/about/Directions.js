import { Link } from "react-router-dom";

function Directions() {
  return (
    <div>
      <h1>Directions</h1>
      <p>Take the 305 S exit to Webville - go 0.4 mi</p>
      <p>Continue on 305 - go 12 mi</p>
      <p>Turn right at Structure Ave N - go 0.6 mi</p>
      <p>Turn right and head toward Structure Ave N - go 0.0 mi</p>
      <p>Turn right at Structure Ave N - go 0.7 mi</p>
      <p>Continue on Structure Ave S - go 0.2 mi</p>
      <p>Turn right at SW Presentation Way - go 0.0 mi</p>
      <p>
        <Link to="../lounge.html">Back to the lounge.</Link>
      </p>
    </div>
  );
}
export default Directions;