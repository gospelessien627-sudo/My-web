import React from 'react'
import './Footer.css'
import { Car, FacebookIcon, TwitterIcon, InstagramIcon, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='foot'>
        <div className="foo">
            <div className="nol">
                <h2 className='ttt'><Car className='car'/>AutoRent</h2>
                <p className='oop'>Your trusted partner for premium car <br /> rentals. Experience the freedom of the <br /> road with our quality vehicles and <br /> exceptional service</p>
                <div className="icon">
                <span><FacebookIcon/></span>
                <span><TwitterIcon/></span>
                <span><InstagramIcon/></span>
                </div>
            </div>
            <div className="coc">
                <div>
                    <h2 className='ttt'>Qucik Links</h2>
                    <div className='linkss'>
                        <ul>
                            <li>Home</li>
                            <li>Our Cars</li>
                            <li>About us</li>
                            <li>Contact</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="wins">
                <div>
                    <h2 className='ttt'>Services</h2>
                </div>
                <div className="wik">
                    <ul>
                        <li>Economy cars</li>
                        <li>Luxury Vehicles</li>
                        <li>SUVs & Trucks</li>
                        <li>Electric cars</li>
                        <li>Long term Rentals</li>
                    </ul>
                    </div>                
            </div>

            <div className="bloq">
                <div>
                    <h2 className='ttt'>Contact Us</h2>
                </div>
                <div className="luh">
                    <ul>
                        <li><Phone className='phone' />+234 313-526-234</li>
                        <li> <Mail className='mail'/> info@autorent.com</li>
                        <li><MapPin className='map'/> Rivers State, Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='line'></div>

        <div className="lent">
            <div>
                <span> &copy; 2026 Autorent. All rights reserved </span>
            </div>
            <div>
                <span>Privacy policy Terms of Service</span>
            </div>
        </div>

    </footer>
  )
}

export default Footer
