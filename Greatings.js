import { useState } from "react";

function Greatings() {
  const [change, setChange] = useState(false);
  const ChangeHandler = () => {
    setChange(true);
  };

  return (
    <div>
      <h2>Hello World</h2>
      {!change && <p> good to see u </p>}
      {change && <p>Changed </p>}

      <button onClick={ChangeHandler}>Change text</button>
    </div>
  );
}
export default Greatings;
