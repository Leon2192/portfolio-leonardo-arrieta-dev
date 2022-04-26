import Link from "next/link";
import Layout from "../../components/LayOut";

import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Contacto = () => {
  return (
    <>
      <Layout>
        <div className="contact-section" id="contacto">
          <div className="contact-headings">
            <h1>Datos de contacto</h1>
            <br />
            <h4 className="text-center">leo.arrieta93@hotmail.com</h4>
            <br />
            <h3>
              <a
                rel="noreferrer"
                href="mailto: leo.arrieta@hotmail.com"
                target="_blank"
              >
                <FiMail size="70" color="#db4a39" />
              </a>
            </h3>
            <div className="divider"></div>
            <div className="container-contact">
              <div className="contact-links">
                <a href="https://github.com/Leon2192" target="_blank">
                  <FaGithubSquare size="60" color="#000000" />
                </a>
                <a
                  href="https://www.linkedin.com/in/leonardo-manuel-arrieta/"
                  target="_blank"
                >
                  <FaLinkedin size="60" color="#0e76a8" />
                </a>
                <a href="https://wa.me/541127682286" target="_blank">
                  <FaWhatsapp size="60" color=" #00bb2d" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contacto;
