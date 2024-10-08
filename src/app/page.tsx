import About from "./about/About";
import Navbar from "./component/Navbar";
import Course from "./course/Course";
import Faq from "./faq/Faq";
import Hero from "./home/Hero";

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Course/>
        <Faq/>
    </div>
  );
}
