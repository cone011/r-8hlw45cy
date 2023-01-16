import React, { useState } from "react";
import "./App.css";

function App() {
  const [isShow, SetIsShow] = useState(false);
  const onShow = (event) => {
    SetIsShow(!isShow);
  };
  return (
    <div className="wrapper">
      <label>
        <input type="checkbox" onClick={onShow} /> Mostrar información
        importante
      </label>
      {isShow ? (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ) : null}
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="wrapper">
//         <label><input type="checkbox" /> Mostrar información importante</label>
//         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
//       </div>
//     );
//   }
// }

export default App;
