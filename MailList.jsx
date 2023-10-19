import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Hurry And Make Your Bookings!!!!!!</h1>
      <span className="mailDesc">Let Us Make Your Stay Comfortable</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList