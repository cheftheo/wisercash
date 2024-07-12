"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faRocket, faFeather, faChild, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";

export const AuthSec = () => {
  return (
    <AnimatePresence>
        <motion.div>
          <div className="p-16 w-full h-full mt-16 max-[600px]:p-0 max-[600px]:mb-6">
            <div className="flex flex-col gap-y-12">

              <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.1 }}
                className="inline-flex max-[600px]:flex-col max-[600px]:w-screen items-center gap-2"
              >
                <FontAwesomeIcon icon={faBullseye} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                <p className="text-amber-100">We are the best in the business</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.3 }}
                className="inline-flex max-[600px]:flex-col max-[600px]:w-screen items-center gap-2"
              >
                <FontAwesomeIcon icon={faRocket} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                <p className="text-amber-100">Fatest online banking you ever had</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="inline-flex max-[600px]:flex-col max-[600px]:w-screen items-center gap-2"
              >
                <FontAwesomeIcon icon={faNewspaper} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                <p className="text-amber-100">Promotions and updates every day</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.7 }}
                className="inline-flex max-[600px]:flex-col max-[600px]:w-screen items-center gap-2"
              >
                <FontAwesomeIcon icon={faChild} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                <p className="text-amber-100">A lightweight app for all user ages</p>
              </motion.div>
            
              <motion.div 
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.9 }}
                className="inline-flex max-[600px]:flex-col max-[600px]:w-screen items-center gap-2"
              >
                <FontAwesomeIcon icon={faFeather} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                <p className="text-amber-100">Best support you ever had</p>
              </motion.div>

            </div>
          </div>
        </motion.div>
    </AnimatePresence>
  );
}