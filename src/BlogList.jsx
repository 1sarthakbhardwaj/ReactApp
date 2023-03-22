const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.likes}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <a href={blog  .url}>View</a>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;