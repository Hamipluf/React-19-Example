import FormRegister from "../components/user/FormRegister";
import PhoneImage from "../assets/phone-mock-1.jpg";
const Register = () => {
  return (
    <section className="min-h-screen flex  items-stretch text-white overflow-hidden">
      <div className="w-full h-screen flex flex-row-reverse">
        <img
          src={PhoneImage}
          alt="background"
          className="object-cover object-center h-screen w-6/12 m-2"
        />
        <button
          onClick={() => navigate(-1)}
          className="btn btn-circle btn-accent btn-sm m-4 absolute left-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-back-up"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 14l-4 -4l4 -4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center w-5/12 shadow-lg">
          <h2 className="text-primary font-bold text-2xl mb-1">
            Hello There!
          </h2>
          <p className="text-sm font-normal text-gray-300 mb-7">Welcome!</p>
          <FormRegister />
        </div>
      </div>
    </section>
  );
};

export default Register;
