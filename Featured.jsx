import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madurai</h1>
          <h2>200+ Hotels</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT67ToAVmA2Gwe1_ggiyKlvAaJ_HOGljA_N8g&usqp=CAU"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Coimbatore</h1>
          <h2>350+ Hotels</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Chennai</h1>
          <h2>500+ Hotels properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;