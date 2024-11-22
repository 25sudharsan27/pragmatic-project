import React, { useState, useRef, useEffect } from 'react';
import './Blogs.css';
import Navbar from '../../components/Navbar/Navbar';
import blogimg from '../../components/images/India.png';
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const [categoriesData, setCategoriesData] = useState("category1");
    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State to manage sidebar visibility
    const sidebarRef = useRef(null);  // Ref for sidebar
    const toggleBtnRef = useRef(null); // Ref for the toggle button

    const navigator = new useNavigate();
    const {id}=useParams();
    console.log(id);
    const categories = [
        "category1",   
        "category2",
        "category3",
        "category4",
        "category5",
    ];

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
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh.",
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
        },{
            date: "20th August 2021",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed risus non lacus auctor aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum maximus, leo vel tincidunt vestibulum, sapien magna rutrum est, ac cursus ligula sapien non nulla. Maecenas sit amet libero suscipit risus porttitor interdum sed vel nibh. See more...",
            readingTime: "5 min read"
        },
        // Add more blog data here...
    ];

    // Close the sidebar if clicked outside
    useEffect(() => {
        // Event listener function to check if clicked outside the sidebar or button
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current && !sidebarRef.current.contains(event.target) && 
                toggleBtnRef.current && !toggleBtnRef.current.contains(event.target)
            ) {
                setIsSidebarVisible(false);  // Close the sidebar if clicked outside
            }
        };

        // Add the event listener when the component is mounted
        document.addEventListener('click', handleClickOutside);

        // Cleanup the event listener when the component is unmounted
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="blogs-page1">
            <div style={{display:'flex',width:"100%"}}>
            <button
                    style={{marginLeft:"30px",marginRight:"-20px"}}
                    ref={toggleBtnRef} // Set reference for the toggle button
                    className="sidebar-toggle-btn"
                    onClick={() => setIsSidebarVisible(!isSidebarVisible)}
                >
                    ☰
                </button>
            <Navbar pos="relative" />
            </div>
            <div className="blogs-page">
                {/* Sidebar Toggle Button (Only for mobile) */}
                

                {/* Sidebar */}
                <div 
                    ref={sidebarRef}  // Set reference for the sidebar
                    className={`blogs-side ${isSidebarVisible ? 'visible' : ''}`}
                >
                    <div className="blogs-side1">
                        <h1 className="blog-category-headi">Blog Categories</h1>
                    </div>
                    {categories.map((category) => (
                        <div 
                            key={category}
                            onClick={() =>{ setCategoriesData(category); navigator(`/blogs`)}} 
                            className={`blog-category ${category === categoriesData ? 'blog-active' : ''}`}
                        >
                            <a 
                                className={`blog-category-heading ${category === categoriesData ? 'blog-active1' : ''}`}
                            >
                                {category}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Blog Content */}
                <div className="blogs">

                    { id===undefined ? 
                    blogs.map((blog, index) => (
                        <div onClick={()=> {navigator(`/blogs/${index}`) }} key={index} className="blog">
                            <img src={blogimg} alt="blog" className="blog-image" />
                            <div className="blog-line">
                                <h1 className="blog-heading">{blog.date}</h1>
                                <p className="blog-reading-time">{blog.readingTime}</p>
                            </div>
                            <p className="blog-content">
                                {blog.content.length > 350 ? `${blog.content.substring(0, 350)}...` : blog.content}
                                <a className="seemoreblogs" href="">See more</a>
                            </p>
                        </div>
                    ))
                    :
                    <div className="blog-singl1-page">
                        <div style={{background:`url(${blogimg})`}} className="service-page-image"></div>
                        <div className="blog-single-page1">
                        <h1 className="blog-heading1"> {blogs[id].date}</h1>
                        <p className="blog-reading-time1">{blogs[id].readingTime}</p>
                        </div>
                        <p className="blog-content1">
                            {blogs[id].content}
                        </p>
                        
                    </div>
                    }
                
                   
                </div>
            </div>
        </div>
    );
};

export default Blogs;
