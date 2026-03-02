import { deals } from "@/data/deals";
import Link from "next/link";
import paths from "@/path";
import Image from "next/image";

export default function stealTheDeal() {

    const filtereddatabycollection = deals.filter(
        (deal) => deal.collection === 'popular'
    )

    return (
        <div>
            <h1 className="text-2xl text-green-900 px-2 py-2 font-extrabold">Crazy Savings Corner</h1>
            <p className="text-lg py-2 items-center">Why pay full price when these deals are right here?</p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-3">
                    {filtereddatabycollection.map((deal) => (
                        <div key={deal.id} className="border border-emerald-500 rounded-2xl bg-gray-200 text-black hover:border-green-950 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                        <Link
                        href={paths.giftcardshowpage(deal.title)}
                        />
                        <Image
                            src={deal.image}
                            alt={deal.title}
                            width={400}
                            height={250}
                            className="w-full h-40 object-cover rounded-t-2xl"
                        />

                        <h2 className="font-bold text-xl px-2">{deal.title}</h2>
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
                    ))
                    }
            </div>
            <Link href="/consumer/gift-cards">
                <button type="button" className="bg-emerald-700 text-white font-bold transition rounded-lg block mx-auto px-4 py-4 hover:shadow-xl">
                    View more
                </button>
            </Link>
        </div>
    )
}