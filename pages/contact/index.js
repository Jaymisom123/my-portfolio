import React, { useRef } from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const form = useRef();

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    const name = form.current['user_name'].value;
    const email = form.current['user_email'].value;
    const subject = form.current['subject'].value;
    const message = form.current['message'].value;

    const phoneNumber = '5594991518569'; 
    const text = `Olá!%0A%0ANome: ${name}%0AEmail: ${email}%0AAssunto: ${subject}%0AMensagem: ${message}`;

    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, '_blank'); 
    form.current.reset(); 
  };

  return (
    <div className='h-full bg-primary/30'>
      <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's
            <motion.span
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='text-accent'
            >
              {' '}connect.
            </motion.span>
          </motion.h2>

          <motion.form
            ref={form}
            onSubmit={sendToWhatsApp}
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            <div className='flex gap-x-6 w-full'>
              <input name='user_name' type='text' placeholder='Name' className='input' required />
              <input name='user_email' type='email' placeholder='Email' className='input' required />
            </div>
            <input name='subject' type='text' placeholder='Subject' className='input' required />
            <textarea name='message' placeholder='Message' className='textarea' required />
            
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'
            >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-[0] group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
