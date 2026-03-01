import React from 'react'
import { MapPin, Calendar, Clock, Search } from 'lucide-react'
import './Nav.css'

const Nav = () => {
  return (
       <section className='nav'>
            <div className='head'>
                <h1 className='hook'>Find Your Perfect Rental Car</h1>
                <p>Discover amazing deals on quality vehicles. Book now and drive away with confidence</p>
            </div>
            <div className="bord">
                <div className='sea'>
                <div className="location">
                    <label className='label'> <MapPin/> <span> Pick up Location</span> </label>
                    <select className='select'>
                        <option>Select city</option>
                        <option>New york</option>
                        <option>Canada</option>
                        <option>Hong kong</option>
                    </select>
                    </div>
                    <div className="date">
                        <label className='labeldate'><Calendar/><span>Calendar</span></label>
                        <input type="date" className='tade' />
                    </div>
                    <div className="clock">
                        <label><Clock/> <span>Pickup date</span></label>
                        <input type="time" className='time' />
                    </div>
                    <div className="return">
                        <label><Calendar/><span>Return date</span></label>
                        <input type="date" className='eat'/>
                    </div>
                    <div className="sss">
                        <button className='butt'> <Search/>Search cars</button>
                    </div>
                        </div>

                    <div className='control'>
                        <div>
                            <span className='span'>500+</span>
                            <span className='block'>Premium Cars</span>
                        </div>
                        <div>
                            <span className='span'>50+</span>
                            <span className='block'>Locations</span>
                        </div>
                        <div>
                        <span className='span'>24/7</span>
                        <span className='block'>Support</span>
                    </div>
                    <div>
                        <span className='span'>99%</span>
                        <span className='block'>Satisfaction</span>
                    </div>
                    </div>
                    
                    
            </div>
        </section>
  )
}

export default Nav
