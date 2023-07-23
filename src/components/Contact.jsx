import React, {useState, useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { stylesVariable } from '../menustyles'
import { SectionWrapped } from '../hoc'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef();
  const [form, setform] = useState(
    {
      name:'',
      email:'',
      message:''
    }
  )
  const [loading, setloading] = useState(false)
  const handleChange = (e) =>{
    
  }
  const handleSubmit = (e) =>{

  }

  return (
    <div className='vl:mt-12 xl:flex-row flex-col-reverse flex gap-4 overflow-hidden justify-center align-center w-1/2'>
      <motion.div
        variants={slideIn('left', 'tween', 2, 4)}
        initial='hidden'
        animate='show'
        
        className='flex-[0.75] bg-black-100 p8 rounded-2xl pt-10 pb-10 w-full'
      >
        <p className={stylesVariable.sectionSubText}>Get in touch</p>
        <h3 className={stylesVariable.sectionHeadText}>Contact</h3>
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8 justify-center align-center w-full'
        >
          <label className='flex flex-col justify-center align-center w-full y-full'>
            <span className='flex w-1/2 y-1/2 text-white font-medium mb-4 text-left px-6'>Your Name</span>
            <input type="text" 
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='flex flex-col text-white bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium w-4/5 y-100 justify-center self-center'
            />
          </label>
          <label className='flex flex-col '>
            <span className='flex w-1/2 y-1/2 text-white font-medium mb-4 text-left px-6'>Your Email</span>
            <input type="email" 
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='flex flex-col text-white bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium w-4/5 y-100 justify-center self-center'
            />
          </label>
          <label className='flex flex-col '>
            <span className='flex w-1/2 y-1/2 text-white font-medium mb-4 text-left px-6'>Your Message</span>
            <textarea 
              name="name" 
              cols="1" 
              rows="7"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className='flex flex-col text-white bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outlined-none border-none font-medium w-4/5 y-100 justify-center self-center'
            />
          </label>
          <button 
            type="submit"
            className='bg-tertiary py-3 px-8 outline-none text-white fontl-bold shadow-md shadow-primary rounded-xl w-1/4 justify-center self-center' 
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default Contact