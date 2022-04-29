import React, { useEffect, useState } from "react";
import "./blog.css";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { fetchAllBlog } from "../redux/blog/blogAction";
import { useSelector, useDispatch } from "react-redux";

const Blog = () => {
  const contents = useSelector((state) => state.allBlogs.contents);
  // console.log("contents", contents);

  const dispatch = useDispatch();
  const [blogcontent, setBlogContent] = useState([]);
  const [searchkey, setSearchKey] = useState();
  const [getData, setData] = useState();
  const [contentId, setContentId] = useState();

  useEffect(() => {
    dispatch(fetchAllBlog());
  }, []);

  useEffect(() => {
    if (contents) {
      setBlogContent(contents?.data?.blogs);
    }
  }, [contents]);
  const searchblog = () => {
    if (searchkey) {
      const newData = contents?.data?.blogs?.filter((item) => {
        return item.title.toLowerCase().includes(searchkey.toLowerCase());
      });
      setBlogContent(newData);
      // console.log("newdata", newData);
    } else {
      setBlogContent(blogcontent);
    }
    // console.log("searchKey", searchkey)
  };

  return (
    <div className="blog-container">
      <div>
        <div className="b-search">
          <Input
            onChange={(e) => setSearchKey(e.target.value)}
            style={{
              height: 55,
            }}
            size="large"
            placeholder="want to search?Type here"
            prefix={
              <SearchOutlined
                style={{ fontSize: "1.2rem", marginTop: "5px" }}
              />
            }
            suffix={
              <Button className="blog-search-button" onClick={searchblog}>
                <span style={{ fontSize: "15px" }}>Search </span>
              </Button>
            }
          />
        </div>
        {searchkey && blogcontent?.length === 0 ? (
          <h1 className="error-message">No Any Blogs Found</h1>
        ) : (
          <div className="blog-main">
            {blogcontent
              ? blogcontent.map((content, index) => {
                  return (
                    <Link
                      to={`/blog/${content.id}`}
                      // target="_blank"
                      onClick={() => {
                        setData(content.id);
                      }}
                    >
                      <div
                        className="blog-submain1"
                        onClick={() => setContentId(content.id)}
                      >
                        <div>
                          <img
                            className="blog_img1"
                            src="./image/1643260077.png"
                          />
                        </div>
                        <div className="b-tt">
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
                  );
                })
              : ""}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
