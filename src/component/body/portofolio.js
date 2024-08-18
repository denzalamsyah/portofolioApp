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
            <figure>
              <img src="./img/simak.webp" alt="culinary" />
            </figure>
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
                className="text-left text-sm flex items-center gap-1 badge badge-warning"
              >
                visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="./img/review.webp" alt="culinary" />
            </figure>
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
                className="text-left text-sm flex items-center gap-1 badge badge-warning"
              >
                visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="./img/sigma.webp" alt="culinary" />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                SIGMATOP E-Commerce
              </h2>
              <p className="text-[18px] text-left">
                Sigmatop E-Commerce: An innovative platform for online clothing
                shopping with the latest collections and easy transactions.
                Visit and find your style!
              </p>
              <a
                href="https://sigma.sabar.my.id/"
                className="text-left text-sm flex items-center gap-1 badge badge-warning"
              >
                visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="./img/inven.webp" alt="culinary" />
            </figure>
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
                className="text-left text-sm flex items-center gap-1 badge badge-warning"
              >
                visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="card bg-base-100 w-80 shadow-xl">
            <figure>
              <img src="./img/swag.webp" alt="culinary" />
            </figure>
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
                className="text-left text-sm flex items-center gap-1 badge badge-warning"
              >
                visit
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                >
                  <path
                    d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z"
                    stroke="#000"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
