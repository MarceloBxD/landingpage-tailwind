import "./App.css";
import { useState } from "react";
import bg from "./assets/images/bg.jpg";
import { HamburgerMenu } from "./components/HamburgerMenu";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" bg-gradient-to-r min-w-400 h-screen w-screen  text-white"
    >
      <header className=" p-6 flex justify-between py-5 w-auto">
        <div className="flex items-center gap-3">
          <div>
            <svg
              className="w-10 h-10 rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div className="">Landing Page</div>
        </div>
        <div className="hidden mobile:flex flex items-center justify-center gap-3">
          <div className="p-2 z-10  hover:bg-white hover:text-black rounded-full cursor-pointer  transition-all duration-400">
            Home
          </div>
          <div className="p-2 z-10 hover:bg-white hover:text-black rounded-full  transition-all duration-400 cursor-pointer">
            About
          </div>
          <div className="z-10 p-2 hover:bg-white hover:text-black rounded-full  transition-all duration-400 cursor-pointer">
            Contact
          </div>
          <div className="z-10 p-2 hover:bg-white hover:text-black border rounded-md  transition-all duration-400 cursor-pointer">
            Sign In
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="block  mobile:hidden cursor-pointer items-center flex"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {open && <HamburgerMenu />}
        </div>
      </header>
      <div className=" flex ml-6 container items-center justify-between px-6">
        <div className="flex flex-col gap-2">
          <div className="text-4xl p-1 font-bold mobile:max-w-sm">
            Welcome to my landing page
          </div>
          <div className="text-2xl  text-gray-500 mobile:max-w-xs max-w-sm z-10">
            This is a simple landing page built with tailwind css.
          </div>
        </div>
      </div>
      <div className="flex-col hidden tablet:flex absolute bottom-0 ">
        <div className="flex mb-10 py-2 justify-around w-screen">
          <div className="border-2 transition-all  hover:scale-150 cursor-pointer border-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="border-2 transition-all cursor-pointer hover:scale-150 border-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </div>
          <div className="border-2 hover:scale-150 transition-all cursor-pointer border-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>
          </div>
          <div className="border-2 hover:scale-150 transition-all cursor-pointer border-white rounded-full p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="max-w-sm containe mobile:block px-6 mx-12 mt-10 rounded-sm bg-slate-400 p-3">
        <article>
          <h2 className=" text-gray-800 font-mono  font-bold">
            Learn to build landing pages with Tailwind
          </h2>
          <p class="line-clamp-3 mt-3">
            Learn how to build landing pages with Tailwind CSS. This is a
            collection of articles that will teach you how to build landing
            pages with Tailwind CSS.
          </p>
          <div className="flex mt-3 mb-3 gap-3 items-center">
            <img src={bg} className="rounded-full w-10 h-10" />
            Marcelo Bracet
          </div>
          <time>Apr 19, 2023</time>
        </article>
      </div>
    </div>
  );
}

export default App;
