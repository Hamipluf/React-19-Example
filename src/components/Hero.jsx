import { version } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
const Hero = () => {
  return (
    <section>
      <NavBar />
      <div className="py-24 flex flex-col  items-center min-h-screen justify-center">
        <div className="mx-auto max-w-[43rem]">
          <div className="text-center">
            <p className="text-lg font-medium leading-8 text-primary">
              Introduciendonos en React v{version}
            </p>
            <h2 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight ">
              ReactSocial-19
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-base-content">
              Specify helps you unify your brand identity by collecting, storing
              and distributing design tokens and assets — automatically.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Empieza ahora{" "}
            </Link>
            <Link
              to="/register"
              className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50"
            >
              Registrate{" "}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
