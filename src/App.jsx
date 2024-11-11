import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import { motion } from 'framer-motion'
import Image from './components/Image'

const App = () => {
  const [clicked, setclicked] = useState(false)

  const clickHandler = () => {
    setclicked(!clicked)

  }


  return (
    <div className='bg-zinc-950 relative h-screen w-full  text-white'>
      <motion.button onClick={() => { clickHandler() }} animate={{ rotate: clicked ? '0' : '180deg' }}  className='z-[101] absolute top-7 p-3 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-900 left-7'><i class="ri-arrow-left-line text-xl text-zinc-300 hover:text-blue-400 duration-300" ></i></motion.button>
      <Sidebar clicked={clicked} />


      <motion.div  className='h-screen w-full bg-zinc-950'>
        <Image clicked={clicked} />

      </motion.div>
    </div>
  )
}

export default App
