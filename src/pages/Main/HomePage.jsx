import Header from "./Header";
import LeftSideBar from "./LeftSidebar";
import Products from "./Products";
import RightSideBar from "./RightSidebar";

const HomePage = () => {
  return (
    <div className="App">
      <Header />
      <div className="home flex md:flex-row flex-col px-6 gap-10 pb-20 h-screen">
        <LeftSideBar />
        <Products />
        <RightSideBar />
      </div>
    </div>
  );
};
export default HomePage;
