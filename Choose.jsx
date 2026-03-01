import React from 'react'
import './Choose.css'
import { Shield, Clock, CreditCard, MapPin, Headphones, FileBadge, Users, Zap } from 'lucide-react'

const Choose = () => {
  return (
    <section className='auto'>
         <div className='cont'>
            <h2>Why Choose AutoRent?</h2>
            <p className='ok'>We're committed to providing you with the best car rental experience through our <br /> premium services and customer-first approach</p>
        </div>

        <div className="formula">
               <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <Shield className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Fully Insured</h3>
                <span className='in'>All our vehicles come with <br /> comprehensive insurace coverage for <br /> your peace of mind </span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <Clock className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>24/7 Service</h3>
                <span className='in'>Round the-clock customer support and <br /> Roadaided assistance wherever you need</span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <CreditCard className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Easy Payment</h3>
                <span className='in'>Secure online Payments with multiple <br /> Payment options and instant  <br /> confirmation </span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <MapPin className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Multiple Locations</h3>
                <span className='in'>Pick up and drop off at any of our 50+ <br /> convenient Locations across the  <br /> Country </span>
                </div>
                    </div>
        </div>
        </div>
        </div>
            <div className="formu">
               <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <Headphones className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Expert Support</h3>
                <span className='in'>Our dedicated team is here to help you  <br /> Find the perfect vehicle for your needs</span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <FileBadge className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Premium Quality</h3>
                <span className='in'>All Vehicles are regitlarly Serviced <br /> And meet our high quality Standards<br /> your peace of mind </span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <Users className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Trusted by Thousands</h3>
                <span className='in'>Join over 100,000 satisfied customers  <br /> Who trust us with their tansportation <br /> needs</span>
                </div>
                    </div>
        </div>
        </div>
        <div className="fff">
        <div className="lll">
            <div className="bb">
            <div className="sh">
                <Zap className='she'/>
                </div>
                <div className="ink">
                <h3 className='not'>Instant Booking</h3>
                <span className='in'>Book your car in just a few clicks and <br /> get instant confirmation via email</span>
                </div>
                    </div>
        </div>
        </div>
        </div>



    </section>
  )
}

export default Choose
