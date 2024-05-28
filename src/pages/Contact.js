import React from "react";

// import picture
import ContactBanner from "../img/contactBanner.jpg";

// import Components
import TopBanner from "../components/TopBanner";

const Contact = () => {
  return (
    <>
      <TopBanner img={ContactBanner} title="Contact" />
      <section className="section">
        <div className="container mx-auto md:flex flex-wrap gap-6">
          {/* map  */}
          <iframe
            className="flex-1 rounded-md"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1053.8533100425634!2d0.5204134164895621!3d6.697377530459118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102723d0b11d89b7%3A0x97105b757a5dfb28!2sTanyigbe%20Senior%20High%20School!5e1!3m2!1sen!2sgh!4v1716874017816!5m2!1sen!2sgh"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* google form  */}
          <iframe
            className="flex-1 rounded-md"
            title="form"
            src="https://docs.google.com/forms/d/e/1FAIpQLScHI2mkHCjznUHie1FytbatvJCg8e_KzMH-yy4KbfVLsP7C6g/viewform?embedded=true"
            // width="640"
            height="588"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
