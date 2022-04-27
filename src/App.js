import { animate, motion } from "framer-motion";
import { useState } from "react";
import logo from './papermario.png'
import download from './download.png'
import movingtire from './movingtire.png'
import './App.css';
function App() {
  return (
    <div>
      <header>
      <motion.img src={movingtire} 
      transition={{yoyo: Infinity, duration: 1}}
      animate={{y: 10}}
      ></motion.img>
      <motion.div transition={{yoyo: Infinity, duration: 3.5, delay: 1}} animate={{y: 15}} className={'logotxt1'}>
        B
      </motion.div>
      <motion.div transition={{yoyo: Infinity, duration: 3.5, delay: 0.5}} animate={{y: 15}} className='logotxt2'>
        A
      </motion.div>
      <motion.div transition={{yoyo: Infinity, duration: 3.5,delay: 1.5}} animate={{y: 15}} className='logotxt3'>
        Y
      </motion.div>
      </header>
      hey yoeyey
    </div>
  );
}

export default App;
