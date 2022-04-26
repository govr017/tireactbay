import { animate, motion } from "framer-motion";
import { useState } from "react";
import logo from './papermario.png'
import download from './download.png'
import movingtire from './movingtire.png'
function App() {
  return (
    <div>
      <motion.img src={logo} alt="logo" width={200}
      whileTap={{rotateY:180}}
      transition={{yoyo: 10}}
      ></motion.img>
      <motion.img src={movingtire} 
      transition={{yoyo: Infinity}}
      animate={{y: 10}}
      ></motion.img>
      <motion.img src={download}
      initial = {{scale: 0.4}}
      whileHover={{scale: 0.6, rotateZ: 360}}
      whileTap = {{scale: 0.5}}>
      </motion.img>
      <div>
      <motion.b>B</motion.b>
      </div>
    </div>
  );
}

export default App;
