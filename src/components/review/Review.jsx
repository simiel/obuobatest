import './review.css'
import selfie from '../../assets/images/jumper.png'

export default function Review() {
    return (
        <div className="review">
            <img className='reviewImage' src={selfie} alt="" />
            <p className="comment">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, minima!</p>
            <p className="name">Lorem, ipsum.</p>
            <p className="title">Lorem, ipsum.</p>
        </div>
    )
}
