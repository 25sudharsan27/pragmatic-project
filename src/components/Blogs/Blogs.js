import './Blogs.css';

import blogimg from '../images/Post1.png';

function App() {
  const blogs = [
    {
        date: "20th August 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
        readingTime: "5 min read"
    },{
        date: "20th August 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
        readingTime: "5 min read"
    },{
        date: "20th August 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
        readingTime: "5 min read"
    },{
        date: "20th August 2021",
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
        readingTime: "5 min read"
    },
    ]
  return (
    <div className="blogs-container">
        <h1 className="blogs-heading">Explore Our Blogs</h1>
        <div className="blogs">
            {blogs.map((blog) => (
                <div className="blog">
                    <img src={blogimg} alt="blog" className="blog-image" />
                    <div className="blog-line">
                        <h1 className="blog-heading">{blog.date}</h1>
                        <p className="blog-reading-time">{blog.readingTime}</p>
                    </div>
                    <p className="blog-content">{blog.content.length > 350 ?  ( blog.content.substring(0,350)  ): blog.content}  <a className="seemoreblogs" href=""> <s> </s>see more</a></p>
                </div>
            )
            )}
        </div>
    </div>
  );
}

export default App;
