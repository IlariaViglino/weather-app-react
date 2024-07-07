import "./styles.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Forecast from "./Forecast.js";
import background from "./background.jpg";

export default function App() {
  return (
    <div className="App" style={{backgroundImage:`url(${background})`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    width: "100%"}}>
      <body >
        <div class="container">
          <Header cityName="Lausanne"/>
          <Forecast />
          <Footer />
        </div>
      </body>
    </div>
  );
}
