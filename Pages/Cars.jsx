import React from 'react'
import './Cars.css'
import {Car, Cog, Fuel, MapPin, Star, Users} from 'lucide-react'
import motor from './Folder/motor.jpg' 
import motor2 from './Folder/motor2.jpg'
import car1 from './Folder/car1.jpg'
import car3 from './Folder/car3.jpg'
import car4 from './Folder/car4.jpg'
import car5 from './Folder/car5.jpg'
import car7 from './Folder/car7.jpg'
import car9 from './Folder/car9.jpg'


const Cars = () => {
  return (
   <nav>
    <div className='style'>
        <div>
            <Car className='loop'/><span className='loo'>Featured Cars</span> <br />
            <span className='parah'>Discover our handpicked selection of premium vehicles, perfect for any journey</span>
        </div>
    </div>
    <div className='body'>
    <div className="divide">
        <div className='back'>
            <img src={motor} alt="Example" className='img'/>
            <span className='toyo'>Toyota model <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>America</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$50/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>
    </div>
        <div className="divide">
        <div className='back'>
            <img src={car1} alt="Example" className='img'/>
            <span className='toyo'>BMW <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>Japan</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$250/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>  

    </div>
        <div className="divide">
        <div className='back'>
            <img src={car3} alt="Example" className='img'/>
            <span className='toyo'>BMW <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>China</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$300/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>  
    </div>
    </div>
        <div className='body'>
    <div className="divide">
        <div className='back'>
            <img src={car4} alt="Example" className='img'/>
            <span className='toyo'> Toyota Auris <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>New York</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$230/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>
    </div>
        <div className="divide">
        <div className='back'>
            <img src={car5} alt="Example" className='img'/>
            <span className='toyo'>Lamborghini <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>Mexico</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$500/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>  

    </div>
        <div className="divide">
        <div className='back'>
            <img src={car7} alt="Example" className='img'/>
            <span className='toyo'>Chevlet <Star className='sta'/><span className='pop'>20</span></span> <br />
            <p className='year'>2023</p> <br />
            <span className='locate'><MapPin/>Iran</span> <br />
            <div className="person">
                <span><Users className='blu'/>5 Seats</span>
                <span><Cog className='blu'/>Automatic</span>
                <span><Fuel className='blu'/>Electric</span>
            </div>
            <div className="content">
                <span>Autopilot</span>
                <span>Private Audio</span>
                <span>+2 More</span>
            </div>
            <h3>$200/<span className='feau'>day</span></h3>
            <div className="blut">
                <button className='vivi'>View details</button>
                <button className='viv'>Book now</button>

            </div>
        </div>  
    </div>
    </div>

   </nav>
  )
}
export default Cars
