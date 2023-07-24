import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import { stylesVariable} from '../menustyles'
import { navLinks } from '../constants/index.js'

import menu from '../assets/menu.png'
import close from '../assets/close.png'

import ledc from '../assets/ledc.png'
import ledb from '../assets/ledb.png'
import lednb from '../assets/lednb.png'
import ledw from '../assets/ledw.png'

const Navbar = () => {
  const [active,setActive] = useState("")
  const [toggle,setToggle] = useState(false)
  return (
    <nav
      className={`${stylesVariable.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center maz-w-7xl mx-auto'>
        <div 
          className='flex item-center gap-2' 
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0)
            }
        }>
          <img src={ledb} alt='logo' className='w-9 h-9 object-contain'/>
          <p className='text-white text-[18px] font-bold flex cursor-pointer'>Lenin&nbsp;<span className='sm:block hidden'> | Software developer</span></p>
        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {
            navLinks.map(link => (
              <li key={link.id}
                  className={`
                    ${
                      active === link.title
                      ? "text-white"
                      : "text-secondary"
                    } 
                    hover:text-white text-[18px] font-medium cursor-pointer
                  `}
                  onClick={()=>setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))
          }
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle? close : menu}
            alt='Menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=> setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
            <ul className='list-none flex sm:flex justify-end items-start flex-col gap-4'>
              {
                navLinks.map(link => (
                  <li key={link.id}
                      className={`
                        ${
                          active === link.title
                          ? "text-white"
                          : "text-secondary"
                        } 
                        font-poppins font-medium cursor-pointer text-[16px]
                      `}
                      onClick={()=>{
                        setActive(link.title);
                        setToggle(!toggle)
                      }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar