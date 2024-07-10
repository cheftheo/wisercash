"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye, faRocket, faFeather, faChild, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";
// import Image from 'next/image'
// import logo from '../../public/logo.png'

export const AuthSec = () => {
  return (
    <AnimatePresence>
      <section>
        <motion.div>
          <div className="p-16 w-full h-full mt-16">
            <div className="flex flex-col gap-y-12">

              <div className="text-white">
                <div className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faBullseye} className="text-amber-200 text-4xl" />
                  <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                  <p className="text-amber-100">We are the best in the business</p>
                </div>
              </div>

              <div className="text-white">
                <div className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faRocket} className="text-amber-200 text-4xl" />
                  <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                  <p className="text-amber-100">Fatest online banking you ever had</p>
                </div>
              </div>
              
              <div className="text-white">
                <div className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faNewspaper} className="text-amber-200 text-4xl" />
                  <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                  <p className="text-amber-100">Promotions and updates every day</p>
                </div>
              </div>

              <div className="text-white">
                <div className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faChild} className="text-amber-200 text-4xl" />
                  <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                  <p className="text-amber-100">A lightweight app for all user ages</p>
                </div>
              </div>
              
              <div className="text-white">
                <div className="inline-flex items-center gap-2">
                  <FontAwesomeIcon icon={faFeather} className="text-amber-200 text-4xl" />
                  <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
                  <p className="text-amber-100">Best support you ever had</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}