import { NextResponse } from "next/server";
import { deals } from '../../data/deals';

export async function GET() {
  return NextResponse.json(deals);
}

