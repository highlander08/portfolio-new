import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const Contact = () => {
  return (
    <section id="contact" className="lg:section py-16 text-whiteHigh">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h2 className="text-[45px] text-accent lg:text-[90px] leading-none mb-12">
                get in <br /> touch
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              type="text"
              placeholder="Nome"
              className="inputHigh  border-b py-3 outline-none w-full placeholder:text-whiteHigh focus:border-accent transition-all"
            />
            <input
              type="text"
              placeholder="Email"
              className="inputHigh  border-b py-3 outline-none w-full placeholder:text-whiteHigh focus:border-accent transition-all"
            />
            <textarea
              className="inputHigh  border-b py-3 outline-none w-full placeholder:text-whiteHigh focus:border-accent transition-all resize-none mb-12"
              placeholder="Mensagem"
            ></textarea>
            <button className="btn btn-lg">Enviar Mensagem</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
