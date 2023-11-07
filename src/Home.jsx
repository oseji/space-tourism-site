import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="pageContainer">
      <motion.div
        initial={{ x: -250, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="textSection mt-10 lg:mt-0 "
      >
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
      </motion.div>

      <div className="imgSection mt-8 lg:mt-0">
        <motion.button
          initial={{ rotate: -180, opacity: 0, x: 250 }}
          animate={{ rotate: 0, opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="exploreBtn"
        >
          EXPLORE
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
