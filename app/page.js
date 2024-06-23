import NavBar from "./components/navBar";
import HomePage from "./HomePage/page";

export default function Home() {
  return (
    <main className="w-full h-full bg-transparent flex">
      {/* <img src='./hero.png' className="w-screen h-screen" /> */}
      <NavBar />
      {/* (the content) } */}
      <div className={`
            w-[96%] h-[96vh] 
            bg-white 
            rounded-2xl 
            mx-[2%] my-[2vh] 
            
        `}>
        <HomePage />
      </div>

    </main>
  );
}
