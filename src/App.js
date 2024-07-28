import "./styles.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Forecast from "./Forecast.js";
import background from "./background.jpg";

export default function App() {
  return (
    <body className="App">
    <div >
     
        <div class="container">
          <Header cityName="Lausanne"/>
          <Footer />
        </div>
      
    </div>
    </body>
  );
}
