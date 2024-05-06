import About from "./About/About";
import Banner from "./Banner/Banner"

const Home = () => {
  return (
    <div>
      <div className="max-w-[1140px] mx-auto">
        <Banner />
        <About/>
      </div>
    </div>
  );
}

export default Home