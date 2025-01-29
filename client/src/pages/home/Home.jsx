import './Home.css';

export const Home = () => {
  return (
    <div className="home-page">
      
      <div className="welcome">Welcome to Zenith Airlines</div>

      <div className="home-img-container">
        <img 
          src="images/home-background-image.jpg" 
          alt="Zenith Background" 
          className="home-img"  
        />
      </div>     
    </div>
    
  )
}