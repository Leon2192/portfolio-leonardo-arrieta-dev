import Link from "next/link";
import Layout from "../../components/LayOut";
import Image from "next/image";
import { motion } from "framer-motion";

const About = ({ user }) => {
  return (
    <>
      <div className="about">
        <Layout>
          <motion.div
            className="row"
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
                  delay: 0.2,
                },
              },
            }}
          >
            <div className="col-md-4 offset-md-4">
              <div className="card card-body text-center">
                <h1>{user.name}</h1>
                <Image
                  src="/aboutme.jpg"
                  alt="profile pic"
                  height={600}
                  width={600}
                ></Image>
                <h5>{user.bio}</h5>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-secondary my-2"
                >
                  Ir a Github
                </a>
              </div>
            </div>
          </motion.div>
        </Layout>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Leon2192");
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

export default About;
