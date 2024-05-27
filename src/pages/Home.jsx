import React, { Suspense } from "react";
import NavBar from "../components/NavBar";
import Feed from "../components/Feed";
import Loader from "../components/Loader";
import { getFeed } from "../utils/helpers/posts/getFeed";
import CreatePost from "../components/CreatePost";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="w-full flex flex-col justify-center items-center my-10">
        <div className="m-5 w-full flex items-center justify-center">
          <CreatePost />
        </div>
        <Suspense fallback={<Loader />}>
          <Feed feedPromise={getFeed()} />
        </Suspense>
      </section>
    </>
  );
};

export default Home;
