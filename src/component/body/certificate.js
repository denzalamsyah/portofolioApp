export default function Certificate() {
  return (
    <section id="certificate">
      <div className="flex justify-center  gap-5 md:gap-10 flex-wrap bg-gray-900 py-10 px-10">
        <div className="text-white flex flex-col gap-2">
          <p className="text-yellow-500 font-belgie text-[22px]">Certificate</p>
          <p className="font-poppins text-[26px]">My achievement certificate</p>
          <p className="font-poppins text-[18px]">
            The various certificates I obtained are from numerous training
            programs and courses.
          </p>
        </div>
        <div className="flex gap-5 md:gap-10 flex-wrap justify-center items-center">
          <div className="card bg-base-100 w-80 md:w-full shadow-xl md:flex-row">
            <figure className="p-5">
              <img
                src="./img/msib.webp"
                alt="Shoes"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Internship and Independent Study KEMENDIKBUD
                <div className="badge badge-success">New</div>
              </h2>
              <p className="text-[18px] text-left">
                These certificates were awarded for successfully completing an
                internship and independent study program in Backend Engineering.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 md:w-full md:flex-row shadow-xl">
            <figure className="p-5">
              <img
                src="./img/db.webp"
                alt="digital-marketing"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Database Management
                <div className="badge badge-success">New</div>
              </h2>
              <p className="text-[18px] text-left">
                I received these certificates after successfully completing
                training and assignments in Database Management at Ruang Guru.
              </p>
            </div>
          </div>
          <div className="card bg-base-100 w-80 md:w-full md:flex-row shadow-xl">
            <figure className="p-5">
              <img
                src="./img/wa.webp"
                alt="content-creator"
                className="max-w-[200px] max-h-[200px]"
              />
            </figure>
            <div className="card-body text-white bg-gradient-to-r from-[#17202a] to-gray-900 rounded-bl-2xl rounded-br-2xl">
              <h2 className="card-title text-left text-yellow-500">
                Web Applications
                <div className="badge badge-success">New</div>
              </h2>
              <p className="text-[18px] text-left">
                I earned these certificates upon successfully finishing training
                and assignments in Web Applications at Ruang Guru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
