import NavBar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className="container py-4">{children}</main>

      <footer className="bg-primary text-light text-center">
        <div className="container p-4">
          <h3>
            &copy; Developed by Leonardo Manuel
            Arrieta
          </h3>
          <h5>{new Date().getFullYear()}</h5>
        </div>
      </footer>
    </>
  );
};

export default Layout;
