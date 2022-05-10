import { animate, motion } from "framer-motion";
import React, { useState } from "react";
import logo from './papermario.png'
import download from './download.png'
import movingtire from './movingtire.png'
import magnet from './magnet.png'

import sonicmania from './tors/Sonic Mania Plus [P] [ENG + 7] (2017) (1.06.0503 + DLC) [rutracker-5451334].torrent'
import escapist from './tors/[Антология] The Escapists + The Escapists The Walking Dead [L] [RUS + ENG + 5] (2015) (1.37 + 4 DLC 2.0.0.1 + 1 DLC) [GOG] [rutracker-5099543].torrent'
import adobe_ae from './tors/Adobe After Effects 2022 v22.2.0 120 (x64) [2022, MULTILANG +RUS] [rutracker-6179158].torrent'
import antonball from './tors/Antonball Deluxe.torrent'
import castle from './tors/BattleBlock Theater [P] [RUS + ENG + 8 RUS + ENG] (2014) [rutracker-6094259].torrent'
import papapepe from './tors/Cooking Simulator [P] [RUS + ENG + 10 ENG] (2019) (5.1.0.3 + 5 DLC) [Scene] [rutracker-5856768].torrent'
import fnaf from "./tors/Five Nights at Freddy's Security Breach [P] [RUS + ENG + 6 ENG] (2021) (Build 7902251) [rutracker-6153711].torrent"


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
      <div className="download1">
      Sonic Mania Plus [P] [ENG + 7] (2017) (1.06.0503 + DLC)
      </div>
      <a href={sonicmania}>
      <motion.img initial={{scale:0.4, x: 1050, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:B4CZUK6NN6ZOAI4S7S5KANERKTKKBXY2&dn=Sonic%20Mania%20Plus%20%5BRePack%5D&tr=http%3A%2F%2Fbt3.t-ru.org%2Fann&tr=http%3A%2F%2Fbt3.t-ru.org%2Fann&tr=http%3A%2F%2Fretracker.local%2Fannounce'>
      <motion.img initial={{scale:0.4, x: 975, y: -110}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
      <div className="download">
      [Антология] The Escapists + The Escapists The Walking Dead [L] [RUS + ENG + 5] (2015) (1.37 + 4 DLC 2.0.0.1 + 1 DLC) [GOG]
      </div>
      <a href={escapist}>
      <motion.img initial={{scale:0.4, x: 1050, y: -120}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:UQ6227HOQ6DJN5NRGNMYXNB44KNTYINL&dn=escapists_the&tr=http%3A%2F%2Fbt.t-ru.org%2Fann'>
      <motion.img initial={{scale:0.4, x: 975, y: -120}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
      <div className="download">
      Adobe After Effects 2022 v22.2.0 120 (x64) [2022, MULTILANG +RUS]
      </div>
      <a href={adobe_ae}>
      <motion.img initial={{scale:0.4, x: 1050, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:EHVG7JQQSLRSVUUNBSCLOOOTLKWTTFLG&dn=Adobe%20After%20Effects%202022%20v22.2.0.120%20x64%20Multilingual.iso&xl=2290503680&tr=http%3A%2F%2Fbt4.t-ru.org%2Fann'>
      <motion.img initial={{scale:0.4, x: 975, y: -110}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
      <div className="download">
      Antonball Deluxe
      </div>
      <a href={antonball}>
      <motion.img initial={{scale:0.4, x: 1050, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:Q6YA2HTVNGU5GJRXSV2T5UIW27AMU2KI&dn=Antonball.Deluxe.rar&xl=38681022&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce'>
      <motion.img initial={{scale:0.4, x: 975, y: -110}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
      <div className="download">
      Cooking Simulator [P] [RUS + ENG + 10 ENG] (2019) (5.1.0.3 + 5 DLC) [Scene]
      </div>
      <a href={papapepe}>
      <motion.img initial={{scale:0.4, x: 1050, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:AXUVTGHTZNAMRMQ5K5AODEL7ZD4MH56S&dn=Cooking.Simulator.Shelter-CODEX&tr=http%3A%2F%2Fbt4.t-ru.org%2Fann'>
      <motion.img initial={{scale:0.4, x: 975, y: -110}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
      <div className="download">
      Five Nights at Freddy's Security Breach [P] [RUS + ENG + 6 ENG] (2021) (Build 7902251)
      </div>
      <a href={fnaf}>
      <motion.img initial={{scale:0.4, x: 1050, y: -110}} whileHover={{scale: 0.5}}
      src={download}
      >
      </motion.img>
      </a>
      <a href='magnet:?xt=urn:btih:Z2B4HILKQCS3ZWWR2S6KTBTMZHGXXMDV&dn=%5Bdixen18%5D%20FNaF%20-%20Security%20Breach&tr=http%3A%2F%2Fbt3.t-ru.org%2Fann'>
      <motion.img initial={{scale:0.4, x: 975, y: -110}} whileHover={{scale: 0.5}}
      src={magnet}
      >
      </motion.img>
      </a>
    </div>
  );
}

export default App;
