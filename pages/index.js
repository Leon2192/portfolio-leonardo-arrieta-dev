import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/LayOut";
import { skills } from "../profile";
import { motion, useViewportScroll } from "framer-motion";

import { FaCode } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useViewportScroll();
  return (
    <>
      <Layout>
        <motion.div
          className="header"
          animate={{ x: 25 }}
          transition={{ delay: 1 }}
        >
          <header className="row">
            <div className="col-md-12">
              <div className="card card-body bg-secondary text-light">
                <div className="row">
                  <div className="col-md-4">
                    <Image
                      src="/profile.jpeg"
                      alt=""
                      width={275}
                      height={200}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-md-8">
                    <motion.div
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
                      <motion.h1 className="text-center text-dark">
                        Front-End Developer Jr
                      </motion.h1>
                    </motion.div>
                    <motion.h5 className="text-center text-light">
                      ¡HOLA! Gracias por ver mi portfolio. Mi nombre es
                      Leonardo, soy una persona entusiasta, organizada, muy
                      detallista y con facilidad para relacionarme con las
                      personas. Me apasiona programar y mi objetivo es crecer
                      profesionalmente para poder dedicarme a ello. Actualmente
                      busco poner en práctica todos mis conocimientos y seguir
                      aprendiendo cada día más para poder desempeñarme como
                      Front-End Developer.
                    </motion.h5>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      style={{ x: 100 }}
                      rel="noreferrer"
                      target="_blank"
                      href="CV-LeonardoManuelArrieta.pdf"
                      className="text-center text-light"
                    >
                      <motion.h3
                        className="text-primary"
                        whileHover={{
                          scale: 1.2,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{ scale: 0.5 }}
                      >
                        Ver CV
                      </motion.h3>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </motion.div>
        <motion.div
          className="skills"
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
                delay: 1,
              },
            },
          }}
        >
          <div className="row py-2">
            <div className="col-md-4">
              <div className="card bg-light">
                <div className="card-body">
                  <h1>Skills</h1>
                  {skills.map(({ skill, percent }, i) => (
                    <div className="py-3" key={i}>
                      <h5>{skill}</h5>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progress-bar"
                          style={{ width: `${percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card bg-light">
                <div className="card-body">
                  <h1>Datos profesionales</h1>
                  <ul>
                    <li>
                      <h4>Coderhouse</h4>
                      <h5>Proyecto</h5>
                      <h6>2022 - 2022</h6>
                      <p>
                        Proyecto real brindado por la empresa para cliente "El
                        Recreologo". Desarrollo web desde cero, hecho con las
                        tecnologías Html, Css, Javascript, React Js y Bootstrap.
                        Actualidad: Mantenimiento web.
                      </p>
                    </li>
                    <li>
                      <h4>Coderhouse</h4>
                      <h5>Desarrollo de Apps - Curso</h5>
                      <h6>2022 - 2022</h6>
                      <p>Desarrollo de apps con React Native y Expo CLI.</p>
                    </li>
                    <li>
                      <h4>Coderhouse</h4>
                      <h5>React JS - Curso</h5>
                      <h6>2021 - 2021</h6>
                      <p>Desarrollo con React JS.</p>
                    </li>
                    <li>
                      <h4>UTN E-Learning</h4>
                      <h5>
                        Diplomatura en Desarrollo Front-End con React, Node JS y
                        Express
                      </h5>
                      <h6>2021 - 2021</h6>
                      <p>Desarrollo con Node JS y librería Express</p>
                    </li>
                    <li>
                      <h4>Coderhouse</h4>
                      <h5>Javascript - Curso</h5>
                      <h6>2021 - 2021</h6>
                      <p>Desarrollo con Javascript.</p>
                    </li>
                    <li>
                      <h4>UTN E-Learning</h4>
                      <h5>Programación web inicial con HTML y CSS - Curso</h5>
                      <h6>2020 - 2020</h6>
                      <p>Desarrollo inicial con html y css.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="portfolio"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0.5,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 2,
              },
            },
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-dark">
                <div className="row">
                  <div className="col-md-12">
                    <motion.h1
                      className="text-center text-light"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2 }}
                    >
                      Algunos de mis proyectos
                    </motion.h1>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.4,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/fire.png"
                          alt=""
                          width={400}
                          height={400}
                          className="card-img-top"
                        />
                      </motion.div>

                      <div className="card-body">
                        <motion.h3 className="text-center text-primary">
                          Firechat
                        </motion.h3>
                        <p className="text-center">
                          Se trata de una aplicación para conocer personas. Está
                          desarrollada con HTML, CSS, JS, React Js, React Native
                          y Expo. Utiliza también Firebase y librerías como
                          React Native Elements y React Navigation.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/Firechat-ProyectoFinalReactNative-Arrieta-Leonardo"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://expo.dev/@leonardoarrieta/firechat?serviceType=classic&distribution=expo-go"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/recreologo.png"
                          width={400}
                          height={400}
                          alt=""
                          className="card-img-top"
                        />
                      </motion.div>
                      <div className="card-body">
                        <h3 className="text-center text-primary">
                          El Recreologo
                        </h3>
                        <p className="text-center">
                          Se trata de un proyecto real para cliente brincado por
                          CODERHOUSE, llamado el Recreólogo, producto de haberme
                          posicionado en el top 10 de la camada del curso de
                          REACT JS.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/El-Recreo-logo"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://el-recreologo.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.2,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/store.png"
                          alt=""
                          width={400}
                          height={400}
                          className="card-img-top"
                        />
                      </motion.div>
                      <div className="card-body">
                        <h3 className="text-center text-primary">
                          Fake Store Api
                        </h3>
                        <p className="text-center">
                          Se trata de una tienda online, desarrollada con HTML,
                          CSS, Javascript y React JS. Utiliza hooks, como
                          dependencias React Router Dom, firebase y comunicación
                          con Api llamada Fake Store Api.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/ProyectoFinalReact-Arrieta-Leonardo-Manuel"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://fakestoreapi-tienda-online.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.2,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/unsplash.png"
                          width={400}
                          height={400}
                          alt=""
                          className="card-img-top"
                        />
                      </motion.div>
                      <div className="card-body">
                        <h3 className="text-center text-primary">
                          ApiUnsplash
                        </h3>
                        <p className="text-center">
                          {" "}
                          Aplicación creada con la herramienta para
                          desarrolladores de Unsplash, que permite conectar con
                          su API. Utiliza HTML, CSS, JS React JS y React Router
                          Dom.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/Buscador-Imagenes-Api"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://fakeunsplash.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/cinema.jpg"
                          width={400}
                          height={400}
                          alt=""
                          className="card-img-top"
                        />
                      </motion.div>
                      <div className="card-body">
                        <h3 className="text-center text-primary">
                          React Cinema
                        </h3>
                        <p className="text-center">
                          Aplicación desarrollada con HTML, CSS, JS y React Js.
                          Funciona conectada con una api, la cual trae mediante
                          un buscador las películas que hacen match con la
                          búsqueda.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/ReactCinema"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://reactcinema-app.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 p-4">
                    <div className="card h-100">
                      <motion.div
                        className="overflow"
                        whileHover={{
                          scale: 1.1,
                          transition: {
                            duration: 0.2,
                          },
                        }}
                      >
                        <Image
                          src="/poke.png"
                          alt=""
                          width={400}
                          height={400}
                          className="card-img-top"
                        />
                      </motion.div>
                      <div className="card-body">
                        <h3 className="text-center text-primary">
                          PokeApi Card
                        </h3>
                        <p className="text-center">
                          Se trata de una card con estilos personalizados
                          utilizando HTML, CSS, Scss y Javascript. La misma
                          obtiene la información de una API llamada Pokeapi,
                          brindando los atributos de cada pokemon.
                        </p>
                        <div className="container-contact">
                          <div className="contact-links">
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://github.com/Leon2192/CardJS-HTML-Css-Scss-PokeApi"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaCode size="35" color="#db4a39" />
                            </motion.a>
                            <motion.a
                              whileHover={{
                                scale: 2,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{ scale: 0.5 }}
                              href="https://pokeapi-card-html-css-scss.netlify.app/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaRocket size="35" color="#0e76a8" />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
}
