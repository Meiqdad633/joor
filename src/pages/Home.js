import "./Home.css";

const Home = () => {
  return(
    <>
    <div className="search-container">
      <label htmlFor="searchbox"></label>
      <div className="icon-containerh">
        <i className="fa-solid fa-briefcase"></i>
        <input id="searchbox" placeholder="دنبال چه شغلی هستی؟ " type="text" required  maxLength={100}/>
      </div>
      <label htmlFor="searchbox2"></label>
      <div className="icon-containerh">
        <i className="fas fa-map-marker-alt"></i>
        <input id="searchbox2" placeholder="انتخاب شهر؟ " type="text" required maxLength={30} />
      </div>
    </div>

  <div><button className="clickbuttonh">جستجو</button></div>
  <div>
    <p className="advertisement">300,000 موقعیت شغلی جدید در یک هفته..!</p>
  </div>
  
  </>

  );
};

export default Home;