import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getHomePageVideos } from "../store/reducer/getHomePageVideos";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { HomePageVideos } from "../Types";
import Card from "../components/Card";
import { clearVideo } from "../store";
import { getSearchPageVideos } from "../store/reducer/getSearchPageVideos";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    return () => {
      dispatch(clearVideo());
    };
  }, [dispatch]);
  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll
            next={function () {
              dispatch(getSearchPageVideos(true));
            }}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            dataLength={videos.length}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
