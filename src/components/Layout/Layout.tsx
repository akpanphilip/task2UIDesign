import Sidebar from "../Sidebar/Sidebar";
// import Header from "../Header/Header";

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="main">
      <Sidebar />
      <section className="main-section">
        {children}
      </section>
    </main>
  );
};

export default Layout;
