import Certificate from "./certificate";
import Contact from "./contact";
import ListTools from "./listtools";
import Portofolio from "./portofolio";
import Service from "./service";

export default function Home() {
  return (
    <>
      <section
        id="home"
        className="px-10 py-10 md:pb-0 bg-gambar bg-cover bg-center md:bg-transparent"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-16 md:pt-5 md:pb-10">
          <div className="text-white flex flex-col items-center gap-5 md:py-10 md:items-end">
            <h1 className="text-[18px] font-belgie">Introduction</h1>
            <p className="text-[22px] md:text-end animate-colorChange">
              I am a Full Stack Web Developer with a solid educational
              background, internship experience, and participation in
              programming scholarships/courses. These experiences have
              strengthened my skills in Full Stack development.
            </p>
          </div>
          <div className="py-10">
            <img
              src="./img/profile.webp"
              className="w-[300px] h-auto animate-move"
            />
          </div>
          <div className="text-white flex flex-col items-center md:items-start gap-5 md:py-10">
            <h1 className="font-belgie text-[32px] relative overflow-hidden whitespace-nowrap border-r-4 border-white animate-typing">
              Rizwan Alamsyah
            </h1>
            <p className="text-[22px] md:text-start font-poppins ">
              Web Development | Content Creator
            </p>
            <a href="#contact">
              <button className="btn btn-outline btn-warning">
                Contact me
              </button>
            </a>
          </div>
        </div>
      </section>
      <hr />
      <Portofolio />
      <hr />
      <Service />
      <hr />
      <Certificate />
      <hr />
      <ListTools />
      <hr />
      <Contact />
    </>
  );
}
