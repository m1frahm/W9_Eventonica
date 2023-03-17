import "./App.css";
import Events from "./components/events";
import Frosting from "./assets/Frosting.jpeg";

function App() {
  return (
    <div className="App">
      <div className="HeaderDiv">
        <div className="TitleDiv">
          <h1>Baking Classes</h1>
        </div>
        <div className="ImgDiv">
          <img
            className="frosting"
            src={Frosting}
            alt="someone frosting a cupcake"
          />{" "}
        </div>
      </div>
      <br></br>
        <br></br>
        <br></br>
      <Events />
    </div>
  );
}

export default App;
