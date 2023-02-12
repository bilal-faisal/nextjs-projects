// Find the file corresponsing to slug
// Polulate that inside the page

type Blog = {
  slug?: string;
  title?: string;
  author?: string;
  content?: string;
  message?: string;
};

async function Slug({ searchParams }: any) {
  let slug = searchParams.slug;
  let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
  let blog = await data.json();
  function createMarkup(d: string) {
    return { __html: d };
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="offset-md-1 col-md-10 pt-5">
            <div className="pb-2">
              {/* <h3 className="text-center mb-5">
                {blog && blog.title ? "Title: " : ""}
                {blog && (blog.title || blog.message)}
              </h3> */}
              <div>
                {blog && (
                  <div dangerouslySetInnerHTML={createMarkup(blog.content)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Slug;
