const Home = () => {
  return (
    <div className="pageContainer">
      <div className="textSection mt-10 lg:mt-0 ">
        <h3 className="smallHeading text-xl text-slate-500">
          so,you want to travel to
        </h3>
        <h1 className="bigHeading text-7xl lg:text-10xl">space</h1>

        <p className="text">
          Let's face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="imgSection mt-8 lg:mt-0">
        <button className="exploreBtn">EXPLORE</button>
      </div>
    </div>
  );
};

export default Home;
