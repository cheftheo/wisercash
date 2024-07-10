"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye } from "@fortawesome/free-solid-svg-icons";

import { AnimatePresence, motion } from "framer-motion";

export const AuthSec = () => {
  return (
    <AnimatePresence>
      <section>
        <motion.div>
          <div className="p-16 w-4/6 h-full mt-24">
            <div className="flex flex-col">
              <div className="text-white inline-flex gap-2">
                <FontAwesomeIcon icon={faBullseye} className="text-amber-200 text-4xl" />
                <h1 className="text-3xl font-bold text-amber-50">Why us?</h1>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
}