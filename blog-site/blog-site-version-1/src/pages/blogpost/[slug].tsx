import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

// Find the file corresponsing to slug
// Polulate that inside the page

type Blog = {
  slug?: string;
  title?: string;
  author?: string;
  content?: string;
  message?: string;
};

function slug() {
  let router = useRouter();

  const [blog, setblog] = useState<Blog>();
  useEffect(() => {
    if (!router.isReady) return;
    let slug = router.query.slug;
    // async function getData() {
    //   let response = await fetch(
    //     `http://localhost:3000/api/getBlog?slug=${slug}`
    //   );
    //   let dataPromise = response.json();
    //   return dataPromise;
    // }
    // getData().then((data) => {
    //   setblog(data);
    // });
    fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
      .then((p) => {
        return p.json();
      })
      .then((data) => {
        setblog(data);
      });
      
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>{blog && (blog.slug || "Blog Not Found")}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
      </Head>
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10 pt-5">
            <div className="pb-2">
              <h3 className="text-center mb-4">
                {blog && blog.title ? "Title: " : ""}
                {blog && (blog.title || blog.message)}
              </h3>
              <p>{blog && blog.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default slug;
