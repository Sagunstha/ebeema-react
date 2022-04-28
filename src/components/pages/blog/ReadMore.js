import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBlog, selectedBlog } from "../redux/blog/blogAction";
import "./blog.css";
import { fetchSelectedBlog } from "../redux/blog/blogAction";
import { Link } from "react-router-dom";

const ReadMore = () => {
  const blogid = useParams();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.content);
  const [contentData, setContentData] = useState({});
  const [relatedBlog, setRelatedBlog] = useState();
  const contents = useSelector((state) => state.allBlogs.contents);
  // console.log("contents", contents);
  // console.log("content", contentData);
  useEffect(() => {
    if (content) {
      setContentData(content?.data?.detail);
    } else {
      setContentData({});
    }
  }, [content]);
  useEffect(() => {
    setRelatedBlog(contents?.data?.blogs);
  }, [contents]);
  // console.log("relatedBlog", relatedBlog);

  useEffect(() => {
    dispatch(fetchAllBlog(blogid.id));
    dispatch(fetchSelectedBlog(blogid.id));
  }, []);

  if (contentData == null) {
    /*to remove this error-Cannot convert undefined or null to object */
    return null;
  }

  return (
    <div className="blog-detail-container">
      <div className="single-blog-wrapper">
        {Object.keys(contentData).length === 0 ? (
          <div>...Loading </div>
        ) : (
          <div className="left-blog-wrapper">
            <div>
              <img className="left-blog-img" src="../image/1643260077.png" />
            </div>
            <h1>{contentData.title}</h1>
            <div className="left-blog-detail">
              <span>{contentData.slug}</span>
              <span>{contentData.created_at}</span>
              <p>{contentData.description}</p>
            </div>
          </div>
        )}
        <div className="right-blog-wrapper">
          <h3>Related Blogs</h3>
          <div className="blog-wrapper">
            {relatedBlog
              ? relatedBlog.map((content, index) =>
                  /* to display related blogs randomly */
                  Math.floor(Math.random() * index) ? (
                    <Link
                      to="/blog/:id"
                      /*to reload page when clicked */
                      onClick={() => window.location.reload()}
                    >
                      <div className="related-blog">
                        <div>
                          <img
                            className="relatedblog-img"
                            src="../image/1643260077.png"
                          />
                        </div>

                        <div className="relatedblod-detail">
                          <p className="b-title">
                            {content.title} <br />
                            <span className="b-timeperiod">Fri/Sat/2022</span>
                          </p>
                          <span className="b-slug">{content.slug}</span>

                          <button className="b-readmore">
                            Read more
                            <span className="arrow-right">
                              <i
                                class="fa fa-long-arrow-right fa-lg"
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </div>
                      </div>
                    </Link>
                  ) : null
                )
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
