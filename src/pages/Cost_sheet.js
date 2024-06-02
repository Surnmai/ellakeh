import React from "react";
// import image
import CostsheetBanner from "../img/costsheetBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Cost_sheet = () => {
  return (
    <>
      <TopBanner img={CostsheetBanner} title="Cost Sheet" />
      <section className="section">
        <div className="container mx-auto text-center text-xl">
          {/* general information  */}
          <div>
            <h1 className="font-bold text-4xl uppercase">
              general information
            </h1>
            {/* sub title  */}
            <div>
              <h3 className="capitalize font-bold text-2xl">marker</h3>

              <div className="flex items-center justify-center gap-x-2 capitalize">
                <p className="font-bold ">fabric:</p>
                <span>green paradise fabric</span>
              </div>
              <div className="flex items-center justify-center gap-x-2 capitalize">
                <p className="font-bold ">Design:</p>
                <span>green paradise fabric</span>
              </div>
            </div>

            <div>
              <h3 className="capitalize font-bold text-2xl">length</h3>
              <p>36"</p>
            </div>

            <div className="mb-3">
              <h3 className="capitalize font-bold text-2xl">yards</h3>
              <p>6</p>
            </div>
          </div>

          {/* fabric information */}
          <div>
            <h1 className="font-bold text-4xl uppercase">fabric information</h1>
            {/* text  */}
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">resource: </p>
              <article>Fabrics hub</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">pattern: </p>
              <article>bodice block and flare block </article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">width: </p>
              <article>50"</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">prices: </p>
              <article>60.00 per yard</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">content: </p>
              <article>silk</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">colors: </p>
              <article>green</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize mb-4">
              <p className="font-bold ">sales person: </p>
              <article>mama jane</article>
            </div>
          </div>

          {/* style information */}
          <div>
            <h1 className="font-bold text-4xl uppercase">style information</h1>
            {/* text  */}
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">style: </p>
              <article>Bustier long flare dress</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">prices: </p>
              <article> 450.00</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">date: </p>
              <article>20/05/2024</article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize">
              <p className="font-bold ">sizes: </p>
              <article>UK |12| </article>
            </div>
            <div className="flex items-center justify-center gap-x-2 capitalize mb-8">
              <p className="font-bold ">colors: </p>
              <article>green</article>
            </div>
          </div>

          {/* trimmings  */}
          <div>
            <h1 className="font-bold text-4xl uppercase mb-2">trimmings</h1>
            <div className="md:grid grid-cols-3">
              <div className="capitalize">
                <h1 className="uppercase font-bold mb-2">materials estimate</h1>
                <div>
                  <p>green paradise fabric 6 yards</p>
                  <p>Zipper 1</p>
                  {/* <p>Buttons 1pack </p> */}
                </div>
              </div>

              <div className="capitalize">
                <h1 className="uppercase font-bold mb-2">Actual price</h1>
                <div>
                  <p>60.00</p>
                  <p>5.0</p>
                  {/* <p>10.00</p>
                  <p>30.00</p> */}
                </div>
              </div>

              <div className="capitalize mb-6">
                <h1 className="uppercase font-bold mb-2">amount</h1>
                <div>
                  <p>360.00</p>
                  <p>5.00</p>
                  {/* <p>20.00</p>
                  <p>30.00</p> */}
                </div>
              </div>
            </div>
          </div>
          {/* total cost  */}
          <div className="md:flex gap-[26.4rem] px-[5.5rem] capitalize font-bold mb-6">
            <h1>total cost</h1>
            <p>365.00</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cost_sheet;
