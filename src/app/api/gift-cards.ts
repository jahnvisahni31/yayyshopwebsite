import { NextResponse } from "next/server";
import { deals } from '../../data/deals';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term")?.toLowerCase() || "";

  const filteredDeals = deals.filter((deal) =>
    deal.title.toLowerCase().includes(term)
  );

  return NextResponse.json(filteredDeals);
}

