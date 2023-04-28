import '../assets/css/Hero.css';
import banner from '../assets/images/IMG.webp'

function Home() {
 
  return (
    <div className="hero-container">
      <img
        src={banner}
        alt="Hero banner"
        className="hero-banner"
      />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Home;
