import BrandCarousel from "@/components/brandsCaraousel";
import { deals } from "@/data/deals";
import paths from "@/path";
import Link from "next/link";

const DEFAULT_DESC = "grab the deals today";

export default function brands() {
    return(
        <>
        <BrandCarousel />
        <div className="p-4 max-w-7xl mx-auto px-4">
            <div className="text-center mb-6">
                <h3 className="text-3xl font-extrabold text-emerald-800">
                    All Brands
                </h3>
                <p className="text-gray-600 text-sm">
                    Explore all available gift cards in one place
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {deals.map((deal)=> (
                    <div key={deal.id} className="border rounded-2xl bg-white text-black">
                        <div>
                            <Link
                            href={paths.giftcardshowpage(deal.title)}
                            className=""
                            />
                            <img 
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-32 object-contain"
                            />
                        </div>
                        <h2 className="font-bold text-xl px-2">{deal.title}</h2>
                        <p className="px-2">
                            <span className="text-red-500 font-semibold">
                                Flat {deal.discount} 
                            </span>
                            {" "} on {deal.title}
                        </p>
                        <p className="font-semibold text-emerald-600 px-2">
                            {deal.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}