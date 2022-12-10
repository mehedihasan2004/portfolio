import React from "react";

const ContactMe = () => {
  return (
    <section className="my-40" i id="section_contact_me">
      <h2 className="text-2xl font-bold text-center my-4">Contact Me</h2>
      <p className="text-center mb-2">Get In Touch</p>
      <div className="flex justify-center items-center bg-black">
        <form
          action="https://formspree.io/f/mzbwnyaj"
          method="POST"
          className="w-full lg:w-1/3 flex flex-col gap-y-2 p-4"
        >
          <input
            className="input input-bordered w-full rounded-none"
            type="text"
            name="Name"
            placeholder="Your Name"
            required
          />
          <input
            className="input input-bordered w-full rounded-none"
            type="email"
            name="Email"
            placeholder="Enter Email"
            required
          />

          <textarea
            className="textarea textarea-bordered rounded-none w-full"
            name="message"
            placeholder="Write Your Message"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="btn btn-primary btn-sm w-full"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
