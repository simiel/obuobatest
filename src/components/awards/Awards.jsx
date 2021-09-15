import './awards.css'
import image from '../../assets/images/award1.png'

export default function Awards() {
    return (
        <div className='awards'>
            <div className="awardItem">
                <img src={image} alt="" />
            </div>
            <div className="awardItem">
                <img src={image} alt="" />
            </div>
            <div className="awardItem">
                <img src={image} alt="" />
                </div>
            <div className="awardItem">
                <img src={image} alt="" />
            </div>
        </div>
    )
}
