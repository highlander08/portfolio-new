import React from "react";
// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import techs from "../assets/techs.png";
import { Link } from "react-scroll";

export const About = () => {
  // const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <div id="about" className="section text-whiteHigh " /*ref={ref}*/>
      <div className="responsive container mx-auto flex items-center justify-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1  bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top "
        >
          <img
            src={techs}
            alt=""
            style={{
              width: "300px",
              height: "500px",
              opacity: 0.7,
              borderRadius: "70px",
              marginBottom: "20px",
            }}
            className="imageHigh"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1"
        >
          <h2 className="h2 text-accent">About Me</h2>
          <h3 className="h3 mb-4">
            I'm am Developer Software with over +2 years of experience.
          </h3>
          <p className="mb-6 font-bold">
            my competences include the use of technologies, React, Javascript.
            typescript, and automation using azure.
          </p>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            style={{ marginTop: "20px" }}
            className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
          >
            <a
              target="_blank"
              href="tel:+5585985645330"
              className="btn btn-lg  flex items-center justify-center text-whiteHigh"
              rel="noreferrer"
            >
              Contact Me
            </a>
            <Link
              to="work"
              className="text-gradient btn-link high cursor-pointer"
            >
              My Porfolio
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
