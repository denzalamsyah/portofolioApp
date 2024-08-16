export default function Service() {
  return (
    <section id="services">
      <div className="flex justify-center  gap-5 md:gap-10 flex-wrap bg-transparent py-10 px-10">
        <div className="text-white flex flex-col gap-2">
          <p className="text-yellow-500 font-belgie text-[22px]">Services</p>
          <p className="font-poppins text-[26px]">What I Am Great At</p>
          <p className="font-poppins text-[18px]">
            The things I master can be seen as follows
          </p>
        </div>
        <div className="flex gap-5 md:gap-10 flex-wrap justify-center items-center">
          <div className="card bg-base-100 w-80 shadow-xl ">
            {/* <figure className="p-5">
              <img
                src="./img/website.svg"
                alt="Shoes"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Web Development
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Building websites from frontend to backend with modern,
                responsive technology optimized for high performance.!
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure className="p-5">
              <img
                src="./img/digmak.svg"
                alt="digital-marketing"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                API Development
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Design and develop secure and scalable RESTful and GraphQL APIs
                to connect multiple services and applications.!
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure className="p-5">
              <img
                src="./img/content.svg"
                alt="content-creator"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Database Management
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Database design and optimization for maximum performance using
                technologies such as MySQL, and PostgreSQL.!
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure className="p-5">
              <img
                src="./img/content.svg"
                alt="content-creator"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Frontend Development
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Building interactive and responsive user interfaces using
                libraries or frameworks like React and Nextjs.!
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure className="p-5">
              <img
                src="./img/content.svg"
                alt="content-creator"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Backend Development
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Building robust and reliable backend servers and applications
                with Golang.!
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure className="p-5">
              <img
                src="./img/content.svg"
                alt="content-creator"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Version Control & Collaboration
                <div className="badge badge-success">middle</div>
              </h2>
              <p className="text-[18px] text-left">
                Git and GitHub for effective version control and team
                collaboration in software development.!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
