import "./styles.css";
import "./styles.css";
import Footer from "./Footer.js";
import Header from "./Header.js";
import Main from "./Main.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div class="container">
      <Header cityName="Lausanne" />
      <Footer />
    </div>
  );
}