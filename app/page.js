import NavBar from "./components/navBar";
import HomePage from "./HomePage/page";

export default function Home() {
  return (
    <main className="w-full h-full bg-transparent flex">
      {/* <img src='./hero.png' className="w-screen h-screen" /> */}
      <NavBar />
      {/* (the content) } */}
      <HomePage />
    </main>
  );
}
