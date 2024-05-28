import React from "react";

// import Components
import TopBanner from "../components/TopBanner";

// import Img
import DesignBriefImg from "../img/hero-bg.jpg";

const Design_brief = () => {
  return (
    <>
      <TopBanner img={DesignBriefImg} title="Design Brief" />
      <section className="section">
        <div className="container mx-auto text-center leading-8 text-xl">
          {/* 1st  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">client Info</h1>
            <p className="font-bold">
              Company name:{" "}
              <span className="font-normal">EllaKeh’s couture </span>
            </p>

            <p className="font-bold">
              City: <span className="font-normal">Ho Volta Region</span>
            </p>

            {/* <p className="font-bold">
              Location:{" "}
              <span className="font-normal">Osabene (Opoku Nsiah Lane 14)</span>
            </p> */}
          </div>

          {/* 2nd  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">Project Info</h1>
            <p className="font-bold">
              Project name: <span className="font-normal">Classic looks</span>
            </p>

            <p className="font-bold">
              Date Issued: <span className="font-normal">06/05/2024</span>
            </p>

            <p className="font-bold">
              Season: <span className="font-normal">End Of Semester</span>
            </p>

            <p className="font-bold">
              Objectives:{" "}
              <span className="font-normal">Online advertisement</span>
            </p>

            <p className="font-bold">
              Key Date & Deadline:{" "}
              <span className="font-normal">19/05/2024</span>
            </p>

            <p className="font-bold">
              Color & Fabric:{" "}
              <span className="font-normal">
                Color & Fabric: Green paradise fabric{" "}
              </span>
            </p>
          </div>

          {/* 3rd  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">Audience</h1>
            <p className="font-bold">
              Target Market: <span className="font-normal">18 - 40years</span>
            </p>

            <p className="font-bold">
              Target Audience:{" "}
              <span className="font-normal">Women interested in fashion</span>
            </p>
          </div>

          {/* 4th  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">Context</h1>
            <p className="font-normal">Online shop</p>
            <p className="font-normal">Walk in shop</p>
          </div>

          {/* 5th  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">
              Design Presentation
            </h1>
            <p className="font-normal">
              Website, jpeg, Mood board, Inspiration board, Fabric board, Color
              palette, Cost sheet
            </p>
          </div>

          {/* 6th  */}
          <div>
            {/* title  */}
            <h1 className="text-3xl font-bold uppercase my-6">
              Primary Contact Person
            </h1>
            <p className="font-bold">CEO</p>
            <p className="font-bold">
              Final approver: <span className="font-normal">CEO</span>
            </p>
            <p className="font-bold">
              Presented to:{" "}
              <span className="font-normal">Dr. Haruna Ibrahim</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Design_brief;
