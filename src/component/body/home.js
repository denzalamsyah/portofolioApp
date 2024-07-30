import Portofolio from "./portofolio";
import Service from "./service";

export default function Home() {
  return (
    <>
      <section id="home" className="px-10 pb-10 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center md:gap-16 md:pt-5 md:pb-10">
          <div className="text-white flex flex-col items-center gap-5 md:py-10 md:items-end">
            <h1 className="text-[18px] font-belgie">Introduction</h1>
            <p className="text-[22px] md:text-end">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <div className="py-10">
            <img src="./img/profile.png" className="w-[300px] h-auto" />
          </div>
          <div className="text-white flex flex-col items-center md:items-start gap-5 md:py-10">
            <h1 className="font-belgie text-[32px]">Rizwan Alamsyah</h1>
            <p className="text-[22px] md:text-start font-poppins">
              Web Development | Digital Marketing | Content Creator
            </p>
            <button className="btn btn-outline btn-warning">Contact me</button>
          </div>
        </div>
      </section>
      <hr />
      <Portofolio />
      <hr />
      <Service />
    </>
  );
}
