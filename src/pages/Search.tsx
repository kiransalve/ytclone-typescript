import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../components/Spinner";
import { HomePageVideos } from "../Types";
import SearchCard from "../components/SearchCard";
import { clearVideo } from "../store";
import { useNavigate } from "react-router-dom";
import { getSearchPageVideos } from "../store/reducer/getSearchPageVideos";

const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const videos = useAppSelector((state) => state.youtubeApp.videos);
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    dispatch(clearVideo());
    if (searchTerm === "") navigate("/");
    else {
      dispatch(getSearchPageVideos(false));
    }
  }, [dispatch, searchTerm, navigate]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <Navbar />
      </div>
      <div className="flex" style={{ height: "92.5vh" }}>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll
              next={function () {
                dispatch(getSearchPageVideos(true));
              }}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              dataLength={videos.length}
              height={650}
            >
              {videos.map((item: HomePageVideos) => {
                return (
                  <div className="my-5">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
