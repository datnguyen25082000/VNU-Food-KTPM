import React, { useEffect } from "react";
import Post from "./Post";
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Rate from "rc-rate";
import PostForm from "../PostForm/LoadPostForm";
import "./main.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { doGetPosts, doGetMorePosts } from "../../redux/slice/postsSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: ${({ size }) => size}px;
  }
`;

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

const StyledGrid = styled.div`
  .transition-enter {
    opacity: 0.01;
    transform: translate(0, -30px);
  }

  .transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 300ms ease-in;
  }
`;

export default function ListPost() {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.listPosts);
  const startIndex = useSelector((state) => state.posts.startIndex);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(doGetPosts({ startIndex: startIndex }));
  }, []);

  const renderListPost = () => {
    var list = posts;
    if (list.length > 0) {
      return (
        <InfiniteScroll
          dataLength={startIndex}
          next={fetchMoreData}
          scrollThreshold={1}
          hasMore={startIndex < 40}
        >
          {posts.map((post, key) => (
            <CSSTransition
              key={post.postID}
              timeout={300}
              classNames="transition"
            >
              <Post post={post} key={post.postID} />
            </CSSTransition>
          ))}
        </InfiniteScroll>
      );
    }
  };
  const fetchMoreData = () => {
    dispatch(doGetMorePosts({ startIndex: startIndex + 4 }));
  };

  return (
    <div class="mx-auto">
      <div className="container">
        {" "}
        <PostForm />
      </div>
      <div className="row w-100 container mx-auto">
        <div className="col-3 ">
          <h5>Bộ lọc</h5>
          <div className="price-order mt-3 shadow">
            <div className="select-box ">
              <div className="options-container active">
                <div
                  className="option option-price pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_price"
                    name="category"
                    value="asc"
                  />
                  <i className="fa fa-sort-alpha-asc" aria-hidden="true"></i>
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    Tăng dần
                  </span>
                </div>
                <div
                  className="option option-price pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="automobiles"
                    name="category"
                    value="desc"
                  />
                  <i class="fa fa-sort-alpha-desc" aria-hidden="true"></i>
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden;" }}
                  >
                    Giảm dần
                  </span>
                </div>
              </div>

              <a
                href="javascript:void(0)"
                className="selected list-group-item rounded list-group-item-action border-0"
                style={{
                  borderBottom: "1px rgba(0,0,0,.125) solid !important",
                  backgroundColor: "#56a4f1",
                }}
              >
                <span>
                  <span class=""></span>Giá
                </span>
              </a>
            </div>
          </div>
          <div className="rating-score mt-3 shadow">
            <div className="select-box ">
              <div className="options-container active">
                <div
                  className="option option-rating pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_rating"
                    name="category"
                    value="1"
                  />
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    <div>
                      <StyledRate value="1" size="24" disabled />
                    </div>
                  </span>
                </div>
                <div
                  className="option option-rating pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_rating"
                    name="category"
                    value="2"
                  />
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    <div>
                      <StyledRate value="2" size="24" disabled />
                    </div>
                  </span>
                </div>
                <div
                  className="option option-rating pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_rating"
                    name="category"
                    value="3"
                  />
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    <div>
                      <StyledRate value="3" size="24" disabled />
                    </div>
                  </span>
                </div>
                <div
                  className="option option-rating pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_rating"
                    name="category"
                    value="4"
                  />
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    <div>
                      <StyledRate value="4" size="24" disabled />
                    </div>
                  </span>
                </div>
                <div
                  className="option option-rating pl-2 d-block p-3"
                  style={{ color: "black", textDecoration: "none;" }}
                >
                  <input
                    type="radio"
                    className="radio"
                    id="input_rating"
                    name="category"
                    value="5"
                  />
                  <span
                    for="automobiles"
                    style={{ maxWidth: "180px", overflow: "hidden" }}
                  >
                    <div>
                      <StyledRate value="5" size="24" disabled />
                    </div>
                  </span>
                </div>
              </div>
              <a
                href="javascript:void(0)"
                className="selected list-group-item rounded list-group-item-action border-0"
                style={{
                  borderBottom: "1px rgba(0, 0, 0, .125) solid!important",
                  backgroundColor: "#56a4f1",
                }}
              >
                <span span>
                  {" "}
                  <span className=""></span>Điểm đánh giá
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="col-9">
          <h5 className="ml-3">Danh sách bài đăng</h5>
          <TransitionGroup
            component={StyledGrid}
            className="row container m-auto"
          >
            {renderListPost()}
          </TransitionGroup>
        </div>
      </div>
      {isLoading && <div className="loader is-loading"></div>}
    </div>
  );
}

// async componentWillMount() {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     const search = urlParams.get('data')
//     if(search == null) {
//         const response = await axios.get('http://localhost:5000/posts/' );
//         this.setState({ posts: response.data.posts.reverse() })
//     }
//     else {
//         const response = await axios.get('http://localhost:5000/posts/search?data=' + search );
//         this.setState({ posts: response.data.posts.reverse() })
//     }
// }
