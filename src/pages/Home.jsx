import React, { Suspense } from "react";
import NavBar from "../components/layout/NavBar";
import Feed from "../components/posts/Feed";
import Loader from "../components/layout/Loader";
import { getFeed } from "../utils/helpers/posts/getFeed";
import CreatePost from "../components/posts/CreatePost";

const Home = () => {
  return (
    <>
      <NavBar />
      <section className="w-full flex flex-col justify-center items-center my-2">
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
