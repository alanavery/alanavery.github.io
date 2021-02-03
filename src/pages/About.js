import resume from '../documents/Alan_Avery_Resume.pdf';

const About = () => {
  return (
    <div className="div-about-page">
      <img
        src="https://res.cloudinary.com/alanavery/image/upload/v1609287001/about/IMG_0896_kfb4mw.jpg"
        alt="Alan Avery"
      />
      <div className="div-about-text text-body">
        <h2>
          Enthusiastic developer with a background in graphic design and more
          than ten years of leadership experience. Now excited to merge a
          well-honed sense of design with a passion for systematic
          problem-solving, and produce inspired web applications that perfectly
          balance form and function.
        </h2>
        <p className="resume">
          <a href={resume} target="_return">
            Click here for my resume.
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
