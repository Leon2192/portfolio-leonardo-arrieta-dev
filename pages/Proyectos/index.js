import Link from "next/link";
import Layout from "../../components/LayOut";

const Proyectos = ({ user }) => {
  return (
    <>
      <Layout>
        <h1>Proyectos</h1>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Layout>
    </>
  );
};


export default Proyectos;
