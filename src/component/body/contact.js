import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Contact() {
  const form = useRef(null);
  const MySwal = withReactContent(Swal);
  const SERVICEID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATEID = process.env.REACT_APP_TEMPLATE_ID;
  const PUBLICKEY = process.env.REACT_APP_PUBLIC_KEY;
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f39c12",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!",
    }).then((result) => {
      if (result.isConfirmed) {
        setIsLoading(true);
        emailjs.sendForm(SERVICEID, TEMPLATEID, form.current, PUBLICKEY).then(
          () => {
            MySwal.fire({
              title: "Success!",
              text: "Your message has been sent.",
              icon: "success",
            });
            setIsLoading(false);
            form.current.reset();
          },
          (error) => {
            console.log(error);
            MySwal.fire({
              title: "Failed!",
              text: `Failed to send. ${error.text}`,
              icon: "error",
            });
            setIsLoading(false);
            form.current.reset();
          }
        );
      } else {
        setIsLoading(false);
      }
    });
  };
  return (
    <>
      <section id="contact" className="px-40">
        <div className="flex justify-between items-center gap-5 md:gap-10 pt-20">
          <div className="text-white flex flex-col gap-2">
            <p className="font-belgie text-left text-[22px] text-warning underline">
              Contact Us
            </p>
            <p className="font-poppins text-left text-[18px]">
              ask more by sending me a message. please fill out the following
              form.
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="card gap-5 w-[60%]">
            <label className="input input-bordered input-warning flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="#f39c12"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                name="email_from"
                className="grow text-white"
                placeholder="your email"
                required
              />
            </label>
            <label className="input input-bordered input-warning flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#f39c12"
                className="h-4 w-4 opacity-70"
                required
              >
                <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" />
              </svg>
              <input
                type="number"
                name="phone_number"
                className="grow text-white"
                placeholder="your phone number"
                required
              />
            </label>
            <label className="input input-bordered input-warning flex items-center gap-2">
              <svg
                viewBox="0 0 1024 1024"
                className="h-4 w-4 opacity-70"
                fill="#f39c12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 1012.8c-253.6 0-511.2-54.4-511.2-158.4 0-92.8 198.4-131.2 283.2-143.2h3.2c12 0 22.4 8.8 24 20.8 0.8 6.4-0.8 12.8-4.8 17.6-4 4.8-9.6 8.8-16 9.6-176.8 25.6-242.4 72-242.4 96 0 44.8 180.8 110.4 463.2 110.4s463.2-65.6 463.2-110.4c0-24-66.4-70.4-244.8-96-6.4-0.8-12-4-16-9.6-4-4.8-5.6-11.2-4.8-17.6 1.6-12 12-20.8 24-20.8h3.2c85.6 12 285.6 50.4 285.6 143.2 0.8 103.2-256 158.4-509.6 158.4z m-16.8-169.6c-12-11.2-288.8-272.8-288.8-529.6 0-168 136.8-304.8 304.8-304.8S816 145.6 816 313.6c0 249.6-276.8 517.6-288.8 528.8l-16 16-16-15.2zM512 56.8c-141.6 0-256.8 115.2-256.8 256.8 0 200.8 196 416 256.8 477.6 61.6-63.2 257.6-282.4 257.6-477.6C768.8 172.8 653.6 56.8 512 56.8z m0 392.8c-80 0-144.8-64.8-144.8-144.8S432 160 512 160c80 0 144.8 64.8 144.8 144.8 0 80-64.8 144.8-144.8 144.8zM512 208c-53.6 0-96.8 43.2-96.8 96.8S458.4 401.6 512 401.6c53.6 0 96.8-43.2 96.8-96.8S564.8 208 512 208z" />
              </svg>
              <input
                type="text"
                name="address"
                className="grow text-white"
                placeholder="your address"
                required
              />
            </label>
            <textarea
              name="message"
              className="textarea textarea-warning text-white"
              placeholder="your message"
              required
            ></textarea>
            {!isLoading ? (
              <input
                className="btn btn-warning text-white text-lg"
                type="submit"
                value="Send"
              />
            ) : (
              <div className="btn btn-warning text-white text-lg items-center">
                Loading{" "}
                <span className="loading loading-dots loading-md"></span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
