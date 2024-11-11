import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Sidebar = ({clicked}) => {
  console.log(clicked);

  const [isOpen, setIsOpen] = useState({ RBC: false, WBC: false });

  const toggleTable = (table) => {
    setIsOpen(prevState => ({
      ...prevState,
      [table]: !prevState[table],
      RBC: table === 'RBC' ? !prevState[table] : false,
      WBC: table === 'WBC' ? !prevState[table] : false,
    }));
  };

  return (
    <motion.div animate={{left:clicked ? '0' : '-100%'}} transition={{
      ease: "linear",
      duration: 0.5,
    }} className={`h-screen absolute overflow-y-auto z-[100] ${window.innerWidth > 768 ? 'w-1/3' : 'w-full'} bg-zinc-800 shadow-sm shadow-zinc-500`}>
      <div className='p-4 mt-16'>
        <div onClick={() => toggleTable('RBC')} className='cursor-pointer'>
        <motion.h2 
            className='text-zinc-300 mb-2 font-bold text-xl'
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 15 }}
          >
            <span className='text-zinc-500'>RBC DATA</span>
          </motion.h2>
          {isOpen.RBC && (
            <motion.table 
              className='w-full mb-4 bg-zinc-700 rounded-lg shadow-lg shadow-zinc-500'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <thead>
                <tr>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>RBC</th>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>Count</th>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Angled Cell</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>222</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>67%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Borderline Ovalacytes</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>50</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>20%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Burr Cells</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>87</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>34%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Fragmented Cells</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>2</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>0.12%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Ovalocytes</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Rounded RBC</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Teardrops</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'></td>
                </tr>
              </tbody>
            </motion.table>
          )}
        </div>
        <div onClick={() => toggleTable('WBC')} className='cursor-pointer'>

          <motion.h2 
            className='text-zinc-300 mb-2 font-bold text-xl'
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120, damping: 15 }}
          >
            <span className='text-zinc-500'>WBC DATA</span>
          </motion.h2>

          {isOpen.WBC && (
            <motion.table 
              className='w-full mt-10 bg-zinc-700 rounded-lg shadow-lg shadow-zinc-500'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <thead>
                <tr>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>WBC</th>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>Count</th>
                  <th className='text-left text-zinc-300 p-4 border-b border-zinc-500'>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Basophil</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>222</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>67%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Eosinophil</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>50</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>20%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Lymphocyte</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>87</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>34%</td>
                </tr>
                <tr 
                  className='hover:bg-zinc-600'>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>Monocyte</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>2</td>
                  <td className='p-4 text-zinc-300 border-b border-zinc-500'>0.12%</td>
                </tr>
              </tbody>
            </motion.table>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Sidebar
