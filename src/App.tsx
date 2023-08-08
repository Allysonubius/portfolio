import React from "react";
import logoGreen from "./Assets/img/logo_green.svg";
import avatar from "./Assets/img/avatar.png";
import Particles from "react-tsparticles";
import { GithubLogo, House, InstagramLogo } from "phosphor-react";
import style from './app.module.css';
export function App() {


  return (
    <>
      <main className="bg-gradient-to-br to-secondary-800 from-secondary-200 max-h-[100vh] max-w-[100vw]">
        <Particles
          style={{ position: "absolute", zIndex: 9999 }}
          id="tsparticles"
          options={{
            fullScreen: { enable: false, zIndex: 0 },
            autoPlay: true,
            detectRetina: true,
            fpsLimit: 30,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                  parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 50,
                },
                repulse: {
                  distance: 500,
                  duration: 0.4,
                },
                grab: {
                  distance: 200,
                  links: {
                    opacity: 0.5,
                  },
                },
              },
            },
            particles: {
              color: {
                value: "#0392FC",
              },
              links: {
                color: "#36944A",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 2,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 500,
                },
                value: 100,
              },
              opacity: {
                value: 5,
              },
              shape: {
                type: "polygon",
              },
              size: {
                value: { min: 1, max: 5 },
              },
              repulse: {
                distance: 500,
                duration: 1,
              },
            },
          }}
        />
        <div className="w-full h-full max-w-screen-xl mx-auto ">
        <header>
          <nav className="w-full z-20 h-[60px] bg-secondary-500 drop-shadow-xl fixed top-0 left-0 flex flex-row items-center justify-evenly">
            <div className="flex-1">
              <ul className="flex flex-row items-center justify-end p-4">
                <li>
                  <a
                    className="text-primary-500 uppercase font-bold hover:text-primary-50 transition-colors mx-6"
                    href="https://github.com/Allysonubius" target="_blank"
                  >
                    <GithubLogo size="28" weight="fill" />
                  </a>
                </li>
                <li>
                  <a
                    className="text-primary-500 uppercase font-bold hover:text-primary-50 transition-colors mx-6"
                    href="https://www.instagram.com/nubius3k/" target="_blank"
                  >
                    <InstagramLogo size="28" weight="fill" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
        <section className="w-full relative h-screen max-w-full overflow-hidden ">
          <img
            src={avatar}
            alt="Avatar"
            className="absolute -left-20  -bottom-0 hidden sm:block z-[999999]"
            />
          <div className="flex-1 flex flex-col sm:absolute sm:right-10 items-center justify-center h-full p-4 text-center">
            <h1 className="text-[3rem] font-logo uppercase text-primary-500">
              Allyson de O. Brandão
            </h1>
            <h2 className="text-secondary-50 uppercase -my-2">
              Developer Mid Level Full Stack
            </h2>

            <span className="text-secondary-100 text-center text-sm md:text-xl mt-4 z-[9999999]">
              <span className={style.color}>Desenvolvo aplicações limpas e intuitivas,
                <br/> procuro sempre dar o meu melhor em cada projeto
                <br/> desde o mais simples ao mais complexo.
              </span>
            </span>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
