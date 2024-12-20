import React,{useState} from 'react';
import { Droplets, Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png'
import { SlLocationPin } from "react-icons/sl";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [searchClicked, setSearchClicked] = useState(false)

  const handleNavClick = (e: any)=>{
    const name = e.target.getAttribute('name')
    setIsMenuOpen(false)
  }
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-content">
          <div className="logo-cov">
            {/* <Droplets className="" /> */}
            <img className="logo" src={logo}/>
          </div>
          
          <div className="route-link">
            <Link to='/'><span className="">Home</span></Link>
            <Link to='/about'><span className="">About Us</span></Link>
            <Link to='/products'><span className="">Products</span></Link>
            <Link to='become-distributor'><span className="">Become a Distributor</span></Link>
            <Link to='/contact'><span className="">Contact Us</span></Link>
          </div>

          <div className='ctc-addr'>
            <div className='ctc'>
              <SlLocationPin className='headericon'/> 
              <div>2, Okorodo Street, D-line, Garrison, Port Harcourt</div>
            </div>
            <div className='ctcaddr'> 
              <div className='num'>+234 901 4727 891</div> 
              <div>Call Us</div>  
            </div>
          </div>

          <div className='headerrightcover'>
            {searchClicked ? 
              <div className='headerrightcover1'>
                <div className='headerright0'
                  onClick={()=>{
                    setSearchClicked(false)
                  }}
                >
                  <IoSearchOutline/>
                </div>
                <input 
                  className='headerinput'
                  placeholder='Search'
                />
              </div>
             : 
            <div className='headerright'
              onClick={()=>{
                setSearchClicked(true)
              }}
            ><IoSearchOutline/></div>}
            <div className='headerright'><IoCartOutline/></div>            
          </div>          
        </div>
        
        <div className='menunav-content'>
          {isMenuOpen ? 
          <div>
            <div className='md'>
              <button 
                className="mdmenu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
              <div className="logo-cov">
                {/* <Droplets className="" /> */}
                <img className="logo" src={logo}/>
              </div> 
            </div>
            <div className="mb-nav-content">
              <div className='headerrightcover'>
                <div className='headerinpcov'>
                  <IoSearchOutline className='headerright1'/>
                  <input 
                    className='headerinp'
                    placeholder='Search'
                  />
                </div>
                <div className='headerright2cov'><IoCartOutline className='headerright2'/></div>            
              </div>

              <div className='ctc-addr'>
                <div className='ctc'>
                  <SlLocationPin className='headericon'/> 
                  <div>2, Okorodo Street, D-line, Garrison, Port Harcourt</div>
                </div>
                <div className='ctcaddr'> 
                  <div className='num'>+234 901 4727 891</div> 
                  <div>Call Us</div>  
                </div>
              </div>

              <div className="route-link" onClick={handleNavClick}>
                <Link to='/'><span className="">Home</span></Link>
                <Link to='/about'><span className="">About Us</span></Link>
                <Link to='/products'><span className="">Products</span></Link>
                <Link to='become-distributor'><span className="">Become a Distributor</span></Link>
                <Link to='/contact'><span className="">Contact Us</span></Link>
              </div>    
            </div>
          </div>: 
            
          <div className='md'>
            <button 
              className="mdmenu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            <div className="logo-cov">
              {/* <Droplets className="" /> */}
              <img className="logo" src={logo}/>
            </div>
          </div>}
        </div> 
          
        
        {/* {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#" className="block hover:text-blue-200">Home</a>
            <a href="#products" className="block hover:text-blue-200">Products</a>
            <a href="#become-distributor" className="block hover:text-blue-200">Become a Distributor</a>
            <a href="#contact" className="block hover:text-blue-200">Contact</a>
          </div>
        )} */}
      </nav>
    </header>
  );
}