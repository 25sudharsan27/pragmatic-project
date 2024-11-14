import './Blogs.css';

import blogimg from '../images/Post1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
    var counter=200;
    useEffect(() => {
        AOS.init({
          duration: 1000,  // Set the animation duration to 1 second
          once: false,      // Trigger the animation only once when scrolled into view
          startEvent: 'DOMContentLoaded'
        });
      }, []);
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
        <h1 data-aos="fade-up" data-aos-delay="200" className="blogs-heading">Explore Our Blogs</h1>
        <div  id="normalblog" className="blogs">
            {(blogs.length > 3 ? (blogs.slice(0,3).map((blog) =>{ 
                counter+=100;
                return (
                <div data-aos="fade-left" data-aos-delay={`${counter}`} className="blog">
                    <img src={blogimg} alt="blog" className="blog-image" />
                    <div className="blog-line">
                        <h1 className="blog-heading">{blog.date}</h1>
                        <p className="blog-reading-time">{blog.readingTime}</p>
                    </div>
                    <p className="blog-content">{blog.content.length > 350 ?  ( blog.content.substring(0,350)  ): blog.content}  <a className="seemoreblogs" href=""> <s> </s>see more..</a></p>
                </div>
                )})):
                blogs.map((blog) => (
                    <div className="blog">
                    <img src={blogimg} alt="blog" className="blog-image" />
                    <div className="blog-line">
                        <h1 className="blog-heading">{blog.date}</h1>
                        <p className="blog-reading-time">{blog.readingTime}</p>
                    </div>
                    <p className="blog-content">{blog.content.length > 350 ?  ( blog.content.substring(0,350)  ): blog.content}  <a className="seemoreblogs" href=""> <s> </s>see more</a></p>
                    </div>
                ))
            )}
        </div>
        <div data-aos="fade-left" data-aos-delay="100" id="mobileblog" className="blogs">
            {[blogs[0]].map((blog) => (
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
        <div data-aos="fade-up" data-aos-delay="100" className="blg-btn">
            <a href="/blogs" className="blogs-button">View All Blogs</a>
        </div>
    </div>
  );
}

export default App;
