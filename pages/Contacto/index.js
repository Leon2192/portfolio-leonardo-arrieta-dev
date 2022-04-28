import Link from "next/link";
import Layout from "../../components/LayOut";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const Contacto = () => {
  return (
    <>
      <Layout>
        <motion.div
          className="contact-section"
          id="contacto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <div className="contact-headings">
            <h1>Datos de contacto</h1>
            <br />
            <h4 className="text-center">leo.arrieta93@hotmail.com</h4>
            <br />
            <motion.h3
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.5 }}
            >
              <motion.a
                rel="noreferrer"
                href="mailto: leo.arrieta@hotmail.com"
                target="_blank"
              >
                <FiMail size="70" color="#db4a39" />
              </motion.a>
            </motion.h3>
            <div className="divider"></div>
            <div className="container-contact">
              <div className="contact-links">
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  href="https://github.com/Leon2192"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubSquare size="60" color="#000000" />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  href="https://www.linkedin.com/in/leonardo-manuel-arrieta/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size="60" color="#0e76a8" />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.5 }}
                  href="https://wa.me/541127682286"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp size="60" color=" #00bb2d" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Contacto;
