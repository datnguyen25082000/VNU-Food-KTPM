import React, { useState, useEffect } from "react";
import Rate from "rc-rate";
import Comment from "../../component/Comment/Comment";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import CommentForm from "../../component/Comment/CommentForm";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  doGetPost,
  doGetComments,
  doGetImages,
} from "../../redux/slice/postsSlice";

const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: ${({ size }) => size}px;
  }
`;

export const Detail = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.post);
  const comments = useSelector((state) => state.posts.comments);
  const images = useSelector((state) => state.posts.images);

  useEffect(async () => {
    if (id) {
      dispatch(doGetPost(id));
      dispatch(doGetComments(id));
      dispatch(doGetImages(id));
    }
  }, [id]);

  const listComment = () => {
    if (comments) {
      if (comments.length != 0)
        return comments.map((item) => {
          return <Comment commentPost={item} />;
        });
    }
  };

  const renderImageSlide = () => {
    var arrayList = [];

    if (images !== undefined) {
      for (var i = 0; i < images.length; i++) {
        const a = images[i];
        var image = {
          original: images[i],
          thumbnail: images[i],
        };
        arrayList.push(image);
      }
    }
    return <ImageGallery items={arrayList} />;
  };

  const getData = () => {
    if (post) {
      return (
        <div style={{ backgroundColor: "#FAF8F8" }} className="mt-3 rounded">
          <div className="container py-4">
            <div className="post-header d-flex justify-content-between">
              <div className="post-author d-flex">
                <div className="post-author-avatar rounded-circle">
                  <img
                    src="https://avatar-redirect.appspot.com/google/106274965921876463717"
                    className="img-fluid rounded-circle w-75"
                    alt="image-username"
                  />
                </div>
                <div className="post-author-username d-flex">
                  <h3 className="my-auto">{post.postUser}</h3>
                </div>
              </div>
              <div className="post-rating d-flex">
                <div className="my-auto d-flex">
                  <div className="d-flex">
                    <span className="mr-2 my-auto">4.5</span>
                  </div>
                  <div>
                    <StyledRate value="4" size="24" disabled />
                  </div>
                </div>
              </div>
            </div>
            <div className="post-title text-center pt-5">
              <h2 className="font-weight-bold text-uppercase">
                {post.postDes}
              </h2>
            </div>
            <div className="post-des">
              <p
                dangerouslySetInnerHTML={{
                  __html: post.postDetail,
                }}
              ></p>
            </div>
            <div className="post-detail mt-4">
              <div className="row d-flex">
                <div className="col-5">{renderImageSlide()}</div>
                <div className="col-7">
                  <div
                    className="rounded w-100 h-100 d-flex justify-content-between flex-column p-3"
                    style={{ backgroundColor: "#E2C6C6" }}
                  >
                    <p>Bữa ăn:</p>
                    <p>Giá:</p>
                    <p>Địa chỉ:</p>
                    <p>Nhận xét:</p>
                    <p>Hashtag:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-button mt-3 d-flex">
              <button type="button" class="btn btn-outline-danger">
                Báo cáo bài viết
              </button>
              <button type="button" class="ml-auto btn btn-outline-success">
                Thêm vào bữa ăn của tôi
              </button>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="p-1">
      {getData()}
      <div
        className="list-comment mt-3 rounded"
        style={{ backgroundColor: "#FAF8F8" }}
      >
        <div className="container pt-3">
          <h4
            className="py-3 my-3"
            style={{ borderBottom: "1px #D1CECE solid" }}
          >
            Đánh giá về bài viết
          </h4>
          {listComment()}

          {post ? <CommentForm postID={post.postID} /> : <></>}
        </div>
      </div>
    </div>
  );
};
