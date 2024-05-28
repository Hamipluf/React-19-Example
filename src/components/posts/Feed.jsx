import React, { use, useEffect } from "react";
import { PostContext } from "../../context/post";
import DeletePostButon from "./DeletePostButon";
import { UserContext } from "../../context/user";
import CreateComment from "./CreateComment";
const Feed = ({ feedPromise }) => {
  const feed = use(feedPromise);
  const { posts, updatePosts } = use(PostContext);
  const { id } = use(UserContext);

  useEffect(() => {
    if (feed.data.success) {
      updatePosts({ posts: feed.data.data });
    }
  }, [feed]);

  const compareByDate = (a, b) => {
    const dateA = new Date(a.created_at);
    const dateB = new Date(b.created_at);
    return dateB - dateA;
  };

  const sortedPosts = posts.sort(compareByDate);

  return (
    <div className="h-[80vh] carousel carousel-vertical rounded-box gap-y-10">
      {feed.data.success &&
        sortedPosts.map((post) => {
          const createdData = new Date(post.created_at);
          return (
            <div key={post.id} className="carousel-item w-full">
              <div class="flex items-start justify-center">
                <div class="rounded-xl border p-5 shadow-md mx-10 bg-base-100 min-w-[80vw]">
                  <div class="flex w-full items-center justify-between border-b pb-3">
                    <div class="flex items-center space-x-3">
                      <div class="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravatar.cc/32')]"></div>
                      <div class="text-lg font-bold text-secondary ">
                        {post.owner.first_name}
                      </div>
                    </div>
                    <div class="flex items-center space-x-8">
                      {post.owner.id === id && <DeletePostButon id={post.id} />}
                      <div class="text-xs text-neutral-500">
                        {createdData.toLocaleDateString()}
                      </div>
                    </div>
                  </div>

                  <div class="mt-4 mb-6">
                    <div class="mb-3 text-xl font-bold">{post.title}</div>
                    <div class="text-sm text-neutral-600">{post.content}</div>
                  </div>

                  <div>
                    <div class="flex items-center justify-between text-slate-500">
                      <div class="flex items-center space-x-4 md:space-x-8">
                        <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                          <CreateComment id={post.id}/>
                        </div>
                        <div class="flex cursor-pointer items-center transition hover:text-slate-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="mr-1.5 h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          <span>4</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Feed;
