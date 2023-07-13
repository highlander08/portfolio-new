import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Image from "../assets/avatar.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

export const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center text-whiteHigh mt-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[22px] font-bold leading-[0.8] lg:text-[40px]"
            >
              HIGHLANDER <span>SANTOS</span> <br />
              <span className="inline-block py-4">
                Desenvolvedor de Software
              </span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[15px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="whiteHigh mr-4 ">Technologies used</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "JAVASCRIPT",
                  2000, // wait 1s before replacing "Mice" with "Hamsters"
                  "CSS",
                  2000,
                  "HTML",
                  2000,
                  "JAVASCRIPT",
                  2000,
                  "TYPESCRIPT",
                  2000,
                  "NEXTJS",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="text-accent"
                style={{ fontSize: "2em", display: "inline-block" }}
                repeat={Infinity}
              />
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              {/* <a
                href="tel:+5585985645330"
                className="btn btn-lg  flex items-center justify-center"
              >
                Contact Me
              </a> */}
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                target="_blank"
                href="https://drive.google.com/file/d/12wAaTmEWF9CM1MpuFSsrbTtTytugzO-c/view"
                class="glow-on-hover"
                type="button"
                rel="noreferrer"
              >
                Download CV
              </a>
              <Link
                to="work"
                className="text-gradient btn-link high text-gradient cursor-pointer hover:scale-105"
              >
                My Porfolio
              </Link>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 mb-5"
            >
              <a
                target="_blank"
                href="https://www.linkedin.com/in/highlandersantos/"
                className="social-icon"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                target="_blank"
                href="https://github.com/highlander08"
                className="social-icon"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </motion.div>
          </div>{" "}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] animate-pulse overflow-hidden image-container"
          >
            <img
              className=" bottom-3 border-transparent border-solid w-[300px] h-[300px]"
              src={Image}
              style={{ borderRadius: "50%" }}
              alt=""
            />
          </motion.div>
        </div>
        <motion.p
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mb-10 max-w-lg mx-auto lg:mx-0 font-bold"
        >
          Mais de 1 ano no mercado. Focado nas tecnologias ReactJs, Node.js e
          Devops. focado na experiência do usuário. Para que ela seja positiva,
          objetivo de garantir um desenho e desenvolvimento adequado das páginas
          e funções. Desenvolvimento de APIs, escrever códigos para interagirem
          com o banco de dados, criar bibliotecas, trabalhar em processos dos
          negócios, estrutura de dados.
        </motion.p>
      </div>
    </section>
  );
};
