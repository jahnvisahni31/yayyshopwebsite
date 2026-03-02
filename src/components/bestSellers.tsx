import { deals } from "@/data/deals";
import Link from "next/link";
import paths from "@/path";

export default function bestSellers() {

    const filtereddatabybestsellers = deals.filter(
        (deal) => deal.collection === 'Bestsellers'
    )

    return (
        <>
        <div>
            <h1 className="text-2xl text-green-900 px-2 py-2 pt-4 font-extrabold items-center">Best Deals of the Week</h1>
            <p className="px-2 text-lg items-center py-2">Grab the highest discounts before they&apos;re gone!</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 px-2 py-2">
                    {filtereddatabybestsellers.map((deal) => (
                        <div key={deal.id} className="border border-emerald-500 rounded-2xl bg-gray-200 text-black hover:border-green-950 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                        <div>
                            <Link
                            href={paths.giftcardshowpage(deal.title)}
                            />
                            <img 
                                src={deal.image}
                                alt={deal.title}
                                className="w-full h-32 object-cover rounded-t-2xl"
                            />
                        </div>
                        <div className="px-3 pb-4">
                            <h2 className="font-bold text-lg px-2 ">{deal.title}</h2>
                            <p className="text-sm text-gray-600 px-2">
                                <span className="text-red-500 font-semibold">
                                    Flat {deal.discount} 
                                </span>
                                {" "}
                            </p>
                            <p className="text-sm text-blue-800 px-2 py-2">
                                {deal.description}
                            </p>
                        </div>
                    </div>
                    ))
                }
            </div>
            <Link href="/consumer/gift-cards">
                <button type="button" className="bg-emerald-700 text-white font-bold transition rounded-lg block mx-auto px-4 py-4 hover:shadow-xl">
                    View more
                </button>
            </Link>
        </div>
        </>
    );
}