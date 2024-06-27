import "./styles.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="App">
      <body>
        <div class="container">
          <Header cityName="Lausanne" temperature="20"/>
          <Forecast />
          <Footer />
        </div>
      </body>
    </div>
  );
}
