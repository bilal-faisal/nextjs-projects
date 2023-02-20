import Link from "next/link";

// Collect all the files from the blogdata directory
// Iterate and display them

type Blog = {
  slug: string;
  title: string;
  author: string;
  overview: string;
  content: string;
};

async function Blog() {
  let data = await fetch("http://localhost:3000/api/blogs");
  let blogs = await data.json();

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-2 col-md-8 pt-5">
            {blogs.map((blogItem: Blog) => {
              return (
                <div className="pb-2" key={blogItem.slug}>
                  <Link
                    href={{
                      pathname: `/blogpost`,
                      query: {
                        slug: blogItem.slug,
                      },
                    }}
                  >
                    <h5 className="h5">{blogItem.title}</h5>
                  </Link>
                  <p>{blogItem.overview.substring(0, 160)}...</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
