import './topproperties.css'
import show from '../../assets/images/high.jpg'

export default function TopProperties() {
    return (
        <div className='topProperties'>
            <div className="header">
                <h1>Our Top Properties</h1>
            </div>
            <div className="courts">
                <div className="courtItem">
                    <h2>Naa Borley Enclave</h2>
                </div>
                <div className="courtItem">
                    <h2>Sunset Court</h2>
                </div>
                <div className="courtItem">
                    <h2>Legacy Court</h2>
                </div>
            </div>

            <div className="showcase">
                <div className="description">
                    <h1 className="name">Naa Borley Enclave</h1>
                    <p className="info">The ultimate dream home, Naa Borley Enclave has been designed to transmit a regal effect on all families</p>
                    <p className="varry">Property Type</p>
                    <p className="value">House</p>
                    <p className="varry">Bedrooms</p>
                    <p className="value">4 Bedrooms</p>
                    <p className="varry">Price</p>
                    <p className="value">$245,000.00</p>

                    {/* <button></button> */}
                </div>
                <div className="image">
                    <img className='imageItem' src={show} alt="" />
                </div>
            </div>
        </div>
    )
}
