import './Blogs.css';
import blogimg from '../images/Post1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Blogs({ ani }) {
  var counter = 200;

  // Initialize AOS only if animations are enabled


  // Helper function to conditionally apply AOS attributes
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };

  const blogs = [
    {
      date: "20th August 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
      readingTime: "5 min read"
    },
    {
      date: "20th August 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
      readingTime: "5 min read"
    },
    {
      date: "20th August 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
      readingTime: "5 min read"
    },
    {
      date: "20th August 2021",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
      readingTime: "5 min read"
    },
  ];

  return (
    <div className="blogs-container">
      <div className="globe-heading-cont" id="project-h-h">
        <h1 className="globe-heading" {...getAosData("fade-up", 0)}>Explore Our Blogs</h1>
        <div className="global-line" {...getAosData("fade-up", 100)} id="project-h"></div>
      </div>

      <div id="normalblog" className="blogs1">
        {blogs.length > 3 ? (
          blogs.slice(0, 3).map((blog) => {
            counter += 100;
            return (
              <div {...getAosData("fade-left", counter)} className="blog" key={blog.date}>
                <img src={blogimg} alt="blog" className="blog-image" />
                <div className="blog-line">
                  <h1 className="blog-heading">{blog.date}</h1>
                  <p className="blog-reading-time">{blog.readingTime}</p>
                </div>
                <p className="blog-content">{blog.content.length > 350 ? blog.content.substring(0, 350) : blog.content}
                  <a className="seemoreblogs" href=""> <s> </s>see more..</a>
                </p>
              </div>
            );
          })
        ) : (
          blogs.map((blog) => (
            <div className="blog" key={blog.date}>
              <img src={blogimg} alt="blog" className="blog-image" />
              <div className="blog-line">
                <h1 className="blog-heading">{blog.date}</h1>
                <p className="blog-reading-time">{blog.readingTime}</p>
              </div>
              <p className="blog-content">{blog.content.length > 350 ? blog.content.substring(0, 350) : blog.content}
                <a className="seemoreblogs" href=""> <s> </s>see more</a>
              </p>
            </div>
          ))
        )}
      </div>

      <div {...getAosData("fade-left", 100)}  id="mobileblog" className="blogs1">
        {[blogs[0]].map((blog) => (
          <div className="blog" key={blog.date}>
            <img src={blogimg} alt="blog" className="blog-image" />
            <div className="blog-line">
              <h1 className="blog-heading">{blog.date}</h1>
              <p className="blog-reading-time">{blog.readingTime}</p>
            </div>
            <p className="blog-content">{blog.content.length > 350 ? blog.content.substring(0, 350) : blog.content}
              <a className="seemoreblogs" href=""> <s> </s>see more</a>
            </p>
          </div>
        ))}
      </div>

      <div {...getAosData("fade-up", 100)}  className="blg-btn">
        <a href="/blogs" className="blogs-button">View All Blogs</a>
      </div>
    </div>
  );
}

export default Blogs;
