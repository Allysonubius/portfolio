
import logo from "./Assets/img/logo.svg";
import bglarge from "./Assets/img/bglarge.png";
import laletra from "./Assets/img/services/laletra.png";
import {
  Bookmark,
  CaretDoubleDown,
  CaretDown,
  GithubLogo,
  InstagramLogo,
  Tag,
  TagChevron,
} from "phosphor-react";

export function Old() {
  const services = [
    {
      name: "",
      img: {
        src: laletra,
        alt: "",
      },
      url: "",
      tags: "",
    }
  ];

  return (
    <>
      <div
        className="w-full relative h-full min-h-[100vh] bg-cover bg-center flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('${bglarge}')`,
        }}
      >
        <img className="md:w-50 sm:w-40" src={logo} alt="Allyson de Oliveira Logo" />
        <h1 className="text-[3rem] text-white font-logo uppercase">
          Allyson O. Brandão
        </h1>
        <a
          href="#inicio"
          className="flex flex-col absolute text-white bottom-2 animate-bounce"
        >
          <CaretDown weight="bold" size="60" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
          <CaretDown weight="bold" size="60" className="-mt-11" />
        </a>
      </div>

      <div
        id="inicio"
        className="flex flex-col justify-between w-full h-full relative min-h-[100vh]"
      >
        <header className="sticky z-10 top-0">
          <nav
            className="h-16 flex p-2 flex-row justify-between items-center bg-primary-900 rounded-b-xl bg-top bg-fixed bg-cover"
            style={{}}
          >
            <div>
              <img className="w-14" src={logo} alt="Allyson de Oliveira Logo" />
            </div>
            <div>
              <ul className="flex font-logo text-white uppercase  flex-row justify-between items-center">
                <li className="mx-2">
                  <a
                    href=""
                    className="flex flex-row items-center hover:underline hover:underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramLogo weight="bold" size="20" />
                    <span className="ml-2">Instagram</span>
                  </a>
                </li>
                <li className="mx-2">
                  <a
                    href=""
                    className="flex flex-row items-center hover:underline hover:underline-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubLogo weight="bold" size="20" />
                    <span className="ml-2">Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
