export default function Portofolio() {
  return (
    <section id="portofolio">
      <div className="flex justify-center gap-5 md:gap-10 flex-wrap bg-gray-900 py-10 px-10">
        <div className="text-white flex flex-col gap-2">
          <p className="text-yellow-500 font-belgie text-[22px]">Portofolio</p>
          <p className="font-poppins text-[26px]">Real Project And Task</p>
          <p className="font-poppins text-[18px]">
            The things I master can be seen as follows
          </p>
        </div>
        <div className="flex gap-5 md:gap-10 flex-wrap justify-center">
          <div className="card bg-base-100 w-80 shadow-xl ">
            {/* <figure>
              <img src="./img/review.png" alt="culinary" />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Financial Administration Information System
              </h2>
              <p className="text-[18px] text-left">
                This system was created for the needs of financial management at
                SMA Plus Nurul Iman Leles
              </p>
              <a
                href="https://front-end-simak.vercel.app/login"
                className="badge badge-success"
              >
                visit
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure>
              <img src="./img/review.png" alt="culinary" />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Culinary Review
              </h2>
              <p className="text-[18px] text-left">
                This website was created to fulfill one of the final projects
                for disanbercode training!
              </p>
              <a
                href="https://tugas-sb-sanbercode-go-next-2024-topaz.vercel.app/"
                className="badge badge-success"
              >
                visit
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure>
              <img src="./img/review.png" alt="culinary" />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                inventory system
              </h2>
              <p className="text-[18px] text-left">
                This system was created to meet the inventory management needs
                at WIT.ID!
              </p>
              <a
                href="https://inventory-wit.vercel.app/"
                className="badge badge-success"
              >
                visit
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            {/* <figure>
              <img src="./img/review.png" alt="culinary" />
            </figure> */}
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                API documentation for student grades
              </h2>
              <p className="text-[18px] text-left">
                The API documentation for student grades includes endpoints for
                retrieving, adding, updating, and deleting student grade data,
                with details on authentication, parameters, responses, and usage
                examples.
              </p>
              <a
                href="https://be-tugas-axios.vercel.app/swagger/index.html"
                className="badge badge-success"
              >
                visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
