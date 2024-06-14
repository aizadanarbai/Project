import MainRoutes from "./MainRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
const Layout = () => {
  return (
    <div>
      <Header />
      <MainRoutes />
      <Footer/>
    </div>
  );
};
export default Layout;
