// Find the file corresponsing to slug
// Polulate that inside the page

type Blog = {
  slug?: string;
  title?: string;
  author?: string;
  content?: string;
  message?: string;
};

const Slug = async ({ searchParams }: any) => {
  let slug = searchParams.slug;

  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let blog = await data.json();

  return (
    <>
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
};

export default Slug;
