import React from 'react'
import './Home.css'
import { useState } from 'react'
import {Car, Menu, X,} from 'lucide-react'

const Home = () => {
    const [open, setOpen] = useState(false);

    const door = () =>{
        setOpen(!open);
    };
  return (

    <section className='opener'>
        <div className='div'>
        <div className='cari'>
            <Car className='car'/> <span className='kok'>AutoRent cars</span>
        </div>
        <div className="link">
            <ul>
                <li>Work</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
    
        <div className="button">
            <button>Sign up</button>
            <button>Login</button>
        </div>
        </div>

                  <div className="liv">
              <button onClick={door} className='poll'>      
                { open ? <X/> : <Menu/>}
        </button>
        </div> 

                {open && (
                  <div className="weak">
             <ul>
                <li>Work</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
                  </div>  
                )}

    </section>
  )
}

export default Home
