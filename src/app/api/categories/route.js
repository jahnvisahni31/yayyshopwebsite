import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    { 
        id: 1, 
        name: "Food", 
        icon: "/categories/food.svg" 
    },
    { 
        id: 2, 
        name: "Electronics", 
        icon: "/categories/electronics.svg" 
    },
    { 
        id: 3, 
        name: "Travel", 
        icon: "/categories/travel.svg" 
    },
    { 
        id: 4, 
        name: "Ecommerce", 
        icon: "/categories/ecommerce.svg" 
    },
    { 
        id: 5, 
        name: "Entertainment", 
        icon: "/categories/entertainment.svg" 
    },
    { 
        id: 6, 
        name: "Fashion", 
        icon: "/categories/fashion.svg" 
    },
  ]);
}
