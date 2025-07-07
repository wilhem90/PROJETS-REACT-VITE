import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navabr/navbar";
import "./Home.css"


function Home() {
  return (
    <>
    <Navbar />
    <div className="box-container-main">
        <p>Bem-vindo ao nosso sistema <h2>BERMAX GLOBAL</h2></p>
    </div>
    </>
  );
}

export default Home;