// CSS
import './Company.css';


const Company = ({ ani }) => {

  // Functions
  const getAosData = (animation, delay) => {
    return ani ? { "data-aos": animation, "data-aos-delay": delay } : {};
  };


  // Rendered Component
  return (
    <div className="company-container">
      <div className="globe-heading-cont" id="project-h-h">
        <h1 className="company-container-name" {...getAosData("fade-up", 0)}>Brands We Collaborate</h1>
        <div className="global-line" {...getAosData("fade-up", 100)} id="project-h"></div>
      </div>
      <div className="company">
        {/* Wrapper for the images that will scroll */}
        <div className="company-images">
          {/* Add duplicate images for seamless infinite scroll */}
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/wc0vse2lmzhkz7x4ztne.webp' alt="company" id="company-image" {...getAosData("fade-up", 200)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/w4lrm9pzgy70f6wkxrjz.webp' alt="company" id="company-image" {...getAosData("fade-up", 300)} />

          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1736167954/socvzhhj15vj9sk4w52b.webp' alt="company" id="company-image" {...getAosData("fade-up", 400)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1736167954/ygb5u1xrr5i9i8hzhcal.webp' alt="company" id="company-image" {...getAosData("fade-up", 500)} />

          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/cjqrkqmmvmjpnujakius.webp' alt="company" id="company-image" {...getAosData("fade-up", 600)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997599/d9ugvwlbgdrzhxh4u8oa.webp' alt="company" id="company-image" {...getAosData("fade-up", 700)} />
          {/* Duplicate the images for continuous scrolling */}
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/wc0vse2lmzhkz7x4ztne.webp' alt="company" id="company-image" {...getAosData("fade-up", 800)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/w4lrm9pzgy70f6wkxrjz.webp' alt="company" id="company-image" {...getAosData("fade-up", 900)} />

          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1736167954/socvzhhj15vj9sk4w52b.webp' alt="company" id="company-image" {...getAosData("fade-up", 1000)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1736167954/ygb5u1xrr5i9i8hzhcal.webp' alt="company" id="company-image" {...getAosData("fade-up", 1100)} />

          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997598/cjqrkqmmvmjpnujakius.webp' alt="company" id="company-image" {...getAosData("fade-up", 1200)} />
          <img src='https://res.cloudinary.com/dbbmdq3uy/image/upload/v1735997599/d9ugvwlbgdrzhxh4u8oa.webp' alt="company" id="company-image" {...getAosData("fade-up", 1300)} />
        </div>
      </div>
    </div>
  );
}

export default Company;
