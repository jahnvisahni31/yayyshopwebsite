'use client';

import { useState, use } from "react";
import { deals } from "@/data/deals";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function giftslug({ params }: { params: Promise<{ slug: string }> }) {
    const {slug } = use(params);
    const pr = deals.find((deal) => deal.slug === slug);
    const [denomination, setdenomination]  = useState(250);
    const [quantity, setquantity]  = useState(1);
    const [recipientype, setRecipientType] = useState('Myself');
    const [message, setMessage] = useState("");
    const presetamnt = [250, 500, 1000, 2000, 2500,3000 , 4000, 5000, 7000, 10000];

    const handlevalue = (val  : number) => {
        if (val < 250) val = 250;
        if (val > 10000) val = 10000;
        alert("Value should be between 250 -10000")
    }

    if (!pr){
        return <div className="p-10 text-center">Gift card not found</div>;

        <Link href={'/'}>
            <Button type="submit" className="bg-blue-950 text-shadow-amber-100">
                Back to home page
            </Button>
        </Link>
    }
    return(
        <>
        <div className="p-4 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-2 items-center">
                <div className="border border-none rounded-2xl bg-gray-200 text-black hover:border-green-950 hover:-translate-x-1 hover:shadow-xl transition-all duration-200">
                    <img 
                        src={pr.image}
                        alt={pr.title}
                        className="w-full rounded-xl object-cover"
                    />
                </div>
                <div className="space-y-4 py-2 px-3">
                    <h1 className="text-3xl font-bold py-2 text-center">{pr.title}</h1>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 text-white border rounded px-3 py-1">
                            {pr.discount} Discount
                        </button>
                    </div>
                    <p className="text-semibold text-xl underline">Description</p>
                    <p className="bg-gray-50 text-gray font-medium">{pr.description}</p>
                </div>
            </div>
            <div>
                <div className="items-center justify-between px-2">
                    <p>Enter Denomination</p>
                    <div className="flex gap-3 mb-3">
                        {presetamnt.map((amt) => (
                            <button
                                key={amt}
                                onClick={() => setdenomination(amt)}
                                className={`px-4 py-3 border rounded ${
                                    denomination === amt
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200"
                                }`}
                            >
                                {amt}
                            </button>
                        ))}
                    </div>
                    <p>Enter a custom amount</p>
                    <input
                        type="text"
                        min={250}
                        max={10000}
                        value={denomination}
                        onChange={(e) => setdenomination(Number(e.target.value))}
                        className="p-2 w-full border rounded"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between px-2 py-2">
                <p className="font-semibold mb-2">
                    Quantity
                </p>
                <input 
                    type="number"
                    min={1}
                    max={10}
                    value={quantity}
                    onChange={(e) => setquantity(Number(e.target.value))}
                    className="border p-2 rounded w-24"
                />
            </div>
            <div>
                <button>Buy now</button>
            </div>
        </div>
        </>
    );
}