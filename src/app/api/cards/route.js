// app/api/cards/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      id: 1,
      title: "McDonalds E-Gift Card",
      image: "/deals/mcdgift.jpeg",
      discount: "10% OFF",
      category: "Food",
    },
    {
      id: 2,
      title: "PVR Inox Gift Card",
      image: "/deals/pvrgift.jpeg",
      discount: "10% OFF",
      category: "Entertainment",
    },
    {
      id: 3,
      title: "SpiceJet Gift Card",
      image: "/deals/spicegift.jpeg",
      discount: "3% OFF",
      category: "Travel",
    },
    {
      id: 4,
      title: "SOTC Travel Gift Card",
      image: "/deals/sotcgift.jpeg",
      discount: "3% OFF",
      category: "Travel",
    },
    {
      id: 5,
      title: "Prestige Smart Kitchen E-Gift Card",
      image: "/deals/prestgift.jpeg",
      discount: "5% OFF",
      category: "Ecommerce",
    },
    {
      id: 6,
      title: "Sterling Holidays E-Gift Card",
      image: "/deals/stergift.jpeg",
      discount: "5% OFF",
      category: "Travel",
    },
    {
      id: 7,
      title: "Speedo E-Gift Card",
      image: "/deals/speedogift.jpeg",
      discount: "5% OFF",
      category: "Fashion",
    },
    {
      id: 8,
      title: "Giva Silver Coin E-Gift Card",
      image: "/deals/givagift.jpeg",
      discount: "5% OFF",
      category: "Fashion",
    },
  ]);
}
