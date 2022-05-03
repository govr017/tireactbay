import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import logo from './papermario.png'
import download from './download.png'
import movingtire from './movingtire.png'

import sonicmania from './tors/Sonic Mania Plus [P] [ENG + 7] (2017) (1.06.0503 + DLC) [rutracker-5451334].torrent'

import './App.css';

//let torrent = {
//  tor: '',
//  magnet: ''
//};

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
      <motion.div transition={{yoyo: Infinity, duration: 3.5, delay: 1}} animate={{y: 15}} className={'logotxt4'}>
        B
      </motion.div>
      <motion.div transition={{yoyo: Infinity, duration: 3.5, delay: 0.5}} animate={{y: 15}} className='logotxt5'>
        A
      </motion.div>
      <motion.div transition={{yoyo: Infinity, duration: 3.5,delay: 1.5}} animate={{y: 15}} className='logotxt6'>
        Y
      </motion.div>
      </header>
      <br></br>
      <div className="download">
      Sonic Mania Plus [P] [ENG + 7] (2017) (1.06.0503 + DLC) [rutracker-5451334]
      </div>
      <a href={sonicmania}>
      <motion.img initial={{scale:0.4, x: 900, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
    </div>
  );
}

export default App;
