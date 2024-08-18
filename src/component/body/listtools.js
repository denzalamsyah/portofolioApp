export default function ListTools() {
  return (
    <section id="experience">
      <div className="flex justify-center gap-5 md:gap-10 flex-wrap py-10 px-10">
        <div className="text-white flex flex-col gap-2">
          <p className="text-yellow-500 font-belgie text-[22px]">
            Tools & Technologies
          </p>
          <p className="font-poppins text-[26px]">My Technical Proficiencies</p>
          <p className="font-poppins text-[18px]">
            Here are the programming languages, databases, version control
            systems, and other tools that I excel at:
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 md:gap-10 flex-wrap">
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src="./img/git.webp"
                alt="git"
                className="max-w-[400px max-h-[400px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-yellow-500">Version Control</h2>
            </div>
          </div>
          <div className="card bg-base-10center0 w-80 shadow-xl ">
            <figure>
              <img
                src="./img/program.webp"
                alt="language-programming"
                className="max-w-[350px] max-h-[350px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-yellow-500">
                Programming Languages & Frameworks
              </h2>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img
                src="./img/sql.webp"
                alt="db"
                className="max-w-[370px] max-h-[370px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-yellow-500">
                Database Management
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
