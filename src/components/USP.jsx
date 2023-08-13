import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine } from 'react-icons/fa';
import { IoMdPeople } from 'react-icons/io';
import { GiCrystalShine } from 'react-icons/gi';
import styles from '../styles';

const USP = () => {
  const [isVisible, setIsVisible] = useState([true, false, false]);

  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setIsVisible([true, true, false]);
    }, 1000);
    const timeout2 = setTimeout(() => {
      setIsVisible([true, true, true]);
    }, 2000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    
     <div className={`bg-black ${styles.paddingX} ${styles.flexCenter}`}>

        
      <div className={`${styles.boxWidth}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible[0] ? 1 : 0, y: isVisible[0] ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="bg-black-gradient rounded-lg shadow p-4"
          >
            <div className="flex items-center justify-center h-16 w-16 bg-[#DC4A32] text-white rounded-full">
              <FaChartLine className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-white">Mall Sales Analytics</h3>
            <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible[1] ? 1 : 0, y: isVisible[1] ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className={`bg-black-gradient rounded-lg shadow p-4 ${isVisible[0] ? '' : 'hidden'}`}
          >
            <div className="flex items-center justify-center h-16 w-16 bg-[#DC4A32] text-white rounded-full">
              <IoMdPeople className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-white">Employee Performance Tracking</h3>
            <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible[2] ? 1 : 0, y: isVisible[2] ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className={`bg-black-gradient rounded-lg shadow p-4 ${isVisible[1] ? '' : 'hidden'}`}
          >
            <div className="flex items-center justify-center h-16 w-16 bg-[#DC4A32] text-white rounded-full">
              <GiCrystalShine className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-white">Predictive Analytics</h3>
            <p className="mt-2 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </motion.div>
        </div>
      </div>
    </div>
    
  );
};

export default USP;
