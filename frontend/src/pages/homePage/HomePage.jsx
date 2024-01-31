import "./homePage.scss";
import Navbar from "../../components/Navbar/Navbar";

function HomePage() {
  return (
    <div className="contenu">
      <h1 className="title">Fallen Figurines game</h1>;
      <div>
        <Navbar />
      </div>
    </div>
  );
}

export default HomePage;
