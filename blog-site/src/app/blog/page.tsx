"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";

// Collect all the files from the blogdata directory
// Iterate and display them

type Blog = {
  slug: string;
  title: string;
  author: string;
  content: string;
};

const Blog = () => {

  const [blogs, setblogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((d) => {
        setblogs(d);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 pt-5">
            {blogs.map((blogItem: Blog) => {
              return (
                <div className="pb-2" key={blogItem.slug}>
                  <Link
                    // href={`/blogpost/${blogItem.slug}`}
                    href={`/blog/${blogItem.slug}`}
                    className={styles.link}
                  >
                    <h5>{blogItem.title}</h5>
                  </Link>
                  <p>{blogItem.content.substring(0, 160)}...</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
