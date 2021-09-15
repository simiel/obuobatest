import './talktous.css'

export default function TalkToUs() {
    return (
        <div className='talkToUs'>
            <div className="info">
                <div className="item1">Customer Satisfaction</div>
                <div className="item2">1500+ sold</div>
            </div>

            <div className="form">
            <form action="/">
        <h1>Talk To Us</h1>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name"/>
          <input type="text" name="name" placeholder="Email"/>
          <input type="text" name="name" placeholder="Phone number"/>
          <input type="text" name="name" placeholder="Reason"/>
        </div>
        <p>Message</p>
        <div>
          <textarea rows="4"></textarea>
        </div>
        <button type="submit" href="/">Submit</button>
      </form>
            </div>
            
        </div>
    )
}
