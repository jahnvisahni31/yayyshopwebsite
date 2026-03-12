import { redirect } from "next/navigation";
import { deals } from "@/data/deals";
import Link from "next/link";
import paths from "@/path";

interface SearchPageProps {
    searchParams: Promise<{
        term?: string;
    }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const params = await searchParams;
    const term = params.term?.toLowerCase() || "";
    const result = deals.filter((deal) => 
        deal.title.toLowerCase().includes(term) || 
        deal.category.toLowerCase().includes(term)
    );

    return (
        <div className="p-5 items-center">
            <h1 className="text-2xl font-bold mb-2 text-center">
                Results found for "{params.term}"
            </h1>

            {result.length === 0 && <p>No results Found</p>}

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2 gap-4 px-2 py-2">
                    {result.map((deal) => (
                        <div key={deal.id} className="border px-4 border-emerald-500 rounded-2xl bg-gray-200 text-black hover:border-green-950 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                            <Link
                                href={paths.giftcardshowpage(deal.slug)}>
                                <img 
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-32 object-cover rounded-t-2xl"
                                />

                                <h2 className="font-bold text-xl px-2">{deal.title}</h2>
                                <p className="text-sm text-gray-600 px-2">
                                    <span className="text-red-500 font-semibold">
                                        Flat {deal.discount} 
                                    </span>
                                    {" "}
                                </p>
                                <p className="text-sm text-blue-800 px-2 py-2">
                                    Grab the deals now!!
                                </p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}