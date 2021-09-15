import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <div className="footerTop">
                <div className="topItem">
                    <p>Devtraco Limited</p>
                    <p>2nd Plot after Coca Cola Factory,  Off The Spintex Road. P. O. Box AN 12284 – Accra, Ghana.</p>
                </div>
                <div className="topItem">
                    <p>Tel: +233 (0)24 340 0300</p>
                    <p>marketing@devtraco.com</p>
                </div>
                <div className="topItem">
                    <p> </p>
                </div>
                <div className="topItem">
                    <p>Receive Update</p>
                    <input type='email' placeholder='Email' />
                    <input type='button' value='Subscribe' />
                </div>
            </div>

            <hr></hr>

            <div className="footerBottom">
                <div className="footerBottomLeft">
                    <div>
                        <ul className="footerList">
                            <li className="footerListItem">Projects</li>
                            <li className="footerListItem">About Us</li>
                            <li className="footerListItem">Blog</li>
                            <li className="footerListItem">Contact</li>
                            <li className="footerListItem">Terms and Conditions</li>
                        </ul>

                        <div className="">
                            <p className="copyright">Copyright © 2021 Devtraco Limited</p>
                        </div>
                    </div>
                    
                </div>
                <div className="footerBottomRight">
                    <i className="footerIcon fab fa-facebook-square"></i>
                    <i className="footerIcon fab fa-instagram-square"></i>
                    <i className="footerIcon fab fa-pinterest-square"></i>
                    <i className="footerIcon fab fa-twitter-square"></i>
                </div>
            </div>
        </div>
    )
}
