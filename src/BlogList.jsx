const BlogList = ({blogs, title, handleDelete}) => {
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <a href={blog  .url}>View</a>
                <button onClick={() => handleDelete(blog.id)}></button>
            </div>
        ))}
        </div>
     );
}
 
export default BlogList;