import React from "react";

// import image
import WorkSketchesBanner from "../img/workSketchesBanner.jpg";
import WorksketchessImg from "../img/flats.jpg";

// import Component
import TopBanner from "../components/TopBanner";

const Working_sketches = () => {
  return (
    <>
      <TopBanner img={WorkSketchesBanner} title="Working sketches" />
      <section className="section">
        <div className="container mx-auto">
          {/* content  */}
          <div className="text-xl text-center mb-8">
            {/* title  */}
            <h1 className="font-bold text-4xl uppercase mb-4">
              general information
            </h1>

            {/* grid  */}
            <div className="md:grid grid-cols-3 gap-4">
              {/* texts  */}
              <div>
                <h1 className="font-bold uppercase">Threads</h1>
                <p>Spun Polyester sewing thread (green)</p>
              </div>
              <div>
                <h1 className="font-bold uppercase">Opening</h1>
                {/* mini title text  */}
                <div className="flex gap-2">
                  <p className="font-bold">Dress: </p>
                  <article>Opening at the seam(zipper)</article>
                </div>
                {/* <div className="flex gap-2">
                  <p className="font-bold">Pant:</p>
                  <article>Zipper,Button and Button holes</article>
                </div> */}
              </div>
              <div>
                <h1 className="font-bold uppercase">Product types</h1>
                <p>Long dress</p>
                {/* <p>Pants(trouser)</p> */}
              </div>
              <div>
                <h1 className="font-bold uppercase">Garment attributes</h1>
                {/* mini title text  */}
                <div className="flex gap-2">
                  <p className="font-bold">Dress: </p>
                  <article>Side seam, Notches, Darts</article>
                </div>
                {/* <div className="flex gap-2">
                  <p className="font-bold">Pant:</p>
                  <article>Side seam, Darts, Belt loops, Band, Pockets</article>
                </div> */}
              </div>
              <div>
                <h1 className="font-bold uppercase">Closure</h1>
                {/* mini title text  */}
                <div className="flex gap-2">
                  <p className="font-bold">Dress: </p>
                  <article>Zipper</article>
                </div>
                {/* <div className="flex gap-2">
                  <p className="font-bold">Pant: : </p>
                  <article>Zipper, Button and Button holes</article>
                </div> */}
              </div>
              <div>
                <h1 className="font-bold uppercase">Consumer</h1>
                <p>Woman</p>
              </div>
            </div>
          </div>

          {/* Images  */}
          <div className="flex items-center justify-center mb-8">
            {/* img1  */}
            <div className="h-[38rem] w-[38rem] shadow-md shadow-slate-950 rounded-md overflow-hidden">
              {/* title  */}
              <h1 className="p-4 bg-black text-white text-lg">
                Front and back shirt sketches{" "}
              </h1>
              {/* Img  */}
              <div className="h-[50rem]">
                <img
                  className="w-full h-full object-cover"
                  src={WorksketchessImg}
                  alt="PatternChat"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Working_sketches;
