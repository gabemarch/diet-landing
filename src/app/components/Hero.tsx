'use client'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Egészséges receptek inzulinrezisztens nőknek
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Testreszabott étrendtervek és egyszerű receptek a mindennapokra
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center">
            App letöltése <FaArrowRight className="ml-2" />
          </button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="md:w-1/2"
        >
          {/* Ideiglenes placeholder kép */}
          <div className="bg-gray-200 h-64 md:h-96 w-full rounded-lg shadow-xl flex items-center justify-center text-gray-400">
            [Hero kép helye]
          </div>
        </motion.div>
      </div>
    </section>
  )
}