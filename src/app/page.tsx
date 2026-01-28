import Navbar from "@/components/Navbar/page";
import Hero from "@/components/Hero/page";
import Deals from "@/components/Deals/page";
import Categories from "@/components/Categories/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Deals />
      <Categories />
    </>
  );
}