import React from "react";

// import image
import AboutImg from "../img/about.jpg";
import AboutTop from "../img/abouttop.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const About = () => {
  return (
    <>
      <TopBanner img={AboutTop} title="About" />
      <section className="section ">
        <div className="container mx-auto md:flex items-center flex-wrap gap-8">
          {/* content  */}
          <div className="my-8 flex-1 leading-5 text-justify text-lg">
            <p className="p-2">
              Keh Emmanuella is my name, an acclaimed teacher with 7 years of
              teaching experience. Born on the 22nd of April in Ho, in the Volta
              Region of Ghana. I grew up with the passion for fashion design and
              studied it at the University (Aamusted).
            </p>
            <p className="p-2">
              After beginning my career at GES I quickly rose through the ranks,
              earning recognition for my innovative approach to teaching career
              technology. I have since worked with GES.
            </p>
            <p className="p-2">
              My achievements include good grades from the BECE and some skills
              students have learnt. At my leisure time, I enjoy spending time
              with toddlers and singing rhymes with them.
            </p>
            {/* <p className="p-2">
              Today, I have my own fashion line that is known for being stylish,
              unique, and classic. When I'm not designing, I enjoy spending time
              with my family and friends, traveling, and exploring new cultures.
              I believe that these experiences are invaluable in terms of
              expanding my knowledge and understanding of the world around me,
              which helps me to create even more innovative designs.
            </p>
            <p className="p-2">
              In conclusion, I am proud to be a fashion designer and a bead
              maker who strives for excellence in everything that I do. I look
              forward to continuing to grow my business and making a name for
              myself in the fashion industry.
            </p>
            <h1 className="px-2 font-bold uppercase text-2xl">
              Mission statement
            </h1>
            <p className="p-2">
              To empower individuality through sustainable, innovative, and
              inclusive fashion design.
            </p>
            <h1 className="px-2 font-bold uppercase text-2xl">
              Vision statement
            </h1>
            <p className="p-2">
              My vision is to revolutionize the fashion industry by merging
              creativity with sustainability, and bringing bespoke fashion to
              all people regardless of their size, style or background.
            </p> */}
          </div>

          {/* image  */}
          <div className="my-8 flex-1 shadow-md shadow-slate-950 overflow-hidden rounded-md h-[40rem]">
            <img
              src={AboutImg}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
