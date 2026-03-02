
import BrandCarousel from '@/components/brandsCaraousel';
import BestSellers from '@/components/bestSellers';
import StealTheDeal from '@/components/stealTheDeal';
export default function Home() {
  return (
    <>
    <div className="w-full">
      <BrandCarousel />
    </div>
    <section className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-6 space-y-10 px-2">
        <div >
          <StealTheDeal />
        </div>
        <div>
          <BestSellers />
        </div>
    </section>
    </>
  );
}
