import './history.css'
import history from '../../assets/images/bung.jpg'

export default function History() {
    return (
        <div className='history'>

            <div className="historyImg">
                <img src={history} height='300px' alt="" />
            </div>
            <div className="historyText">
                <p>Devtraco Limited has been in existence since 1993 as one of Ghana’s leading real estate companies with up to 1,800 properties built for the Ghanaian society. At Devtraco, we are committed to providing quality housing solutions to our customers through professional staff and state-of-the-art building technologies. Our current project, Devtraco Courts, currently houses over 1,200 residents and 300 housing units being developed over an acquired land area of 205 acres. Our previous projects add up to over 300 residents respectively.</p>
            </div>
            {/* <div className="historyItems">
            <div className="historyImage">
                <img className="historyImg" src={history} alt="" />
            </div>
            <div>
            <span className="historyText">Devtraco Limited has been in existence since 1993 as one of Ghana’s leading real estate companies with up to 1,800 properties built for the Ghanaian society. At Devtraco, we are committed to providing quality housing solutions to our customers through professional staff and state-of-the-art building technologies. Our current project, Devtraco Courts, currently houses over 1,200 residents and 300 housing units being developed over an acquired land area of 205 acres. Our previous projects add up to over 300 residents respectively.</span>                {/* <BUTTON></BUTTON> */}
            {/* </div> */}
            {/* </div> */}
        </div>
    )
}
