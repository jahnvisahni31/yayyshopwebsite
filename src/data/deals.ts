const slugify = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const DEFAULT_DESC = "GRAB YOUR DEALS NOW"

export const rawdeals = [
    {
        id: 1,
        title: "McDonalds E-Gift Card",
        image: "/deals/mcd.jpeg",
        discount: "10% OFF",
        category: "Food",
        description: "McDonald's is the world's leading global food service retailer and largest fast-food chain, with over 36,000 locations in over 100 countries. Founded in 1940, it is renowned for its iconic menu items like the Big Mac, fries, and Chicken McNuggets, operating mainly through a franchise business model.",
        collection: 'popular',
    },
    {
        id: 2,
        title: "Pvr Inox Cinemas e-gift card",
        image: "/deals/pvrgift.jpeg",
        discount: "10% OFF",
        category: "Entertainment",
        description: "PVR INOX Limited is India's largest and most premium film exhibition company, formed in 2023 by the merger of PVR Cinemas and INOX Leisure. It operates a massive network of over 1,700 screens across 111 cities in India and Sri Lanka, offering diverse viewing formats like IMAX, 4DX, and LUXE. The company is renowned for transforming the movie-going experience with superior technology and luxury amenities.",
        collection: 'popular',
    },
    {
        id: 3,
        title: "SpiceJet E-gift card",
        image: "/deals/spicegift.jpeg",
        discount: "3% OFF",
        category: "Airline",
        description: "SpiceJet is a prominent Indian low-cost airline headquartered in Gurgaon, Haryana, offering budget-friendly air travel with a focus on domestic connectivity, particularly under the UDAN scheme. Founded in 2005, it operates a fleet of Boeing 737s and Q400s, connecting numerous Indian and international destinations.",
        collection: 'popular',
    },
    {
        id: 4,
        title: "SOTC Travel e-gift card",
        image: "/deals/sotcgift.jpeg",
        discount: "3% OFF",
        category: "Travel",
        description: "SOTC (formerly Kuoni Travel India) is a leading Indian travel company under Fairfax Financial Holdings via Thomas Cook (India) Limited. With over 70 years of experience, it specializes in leisure, incentive, and business travel, offering customized, escorted group, and luxury holidays for domestic and international destinations.",
        collection: 'popular',
    },
    {
        id: 5,
        title: "Prestige Smart Kitchen E-Gift Card",
        image: "/deals/prestgift.jpeg",
        discount: "5% OFF",
        category: "Ecommerce",
        description: "Prestige Smart Kitchen is India’s leading exclusive retailer of TTK Prestige appliances, offering a vast, modern range of durable, safe, and innovative cookware, induction cooktops, and kitchen tools. Focused on enhancing the cooking experience, these stores provide high-quality, user-friendly, and stylish products designed for contemporary Indian homes.",
        collection: 'popular',
    },
    {
        id: 6,
        title: "Sterling Holidays E-Gift Card",
        image: "/deals/stergift.jpeg",
        discount: "5% OFF",
        category: "Travel",
        description: "Sterling Holiday Resorts Limited is a leading Indian experiential holiday company and a subsidiary of Thomas Cook India, operating over 60 resorts across 50+ destinations. Known for pioneering vacation ownership in India, they provide diverse, curated experiences in hills, beaches, and jungles, backed by high-quality service.",
        collection: 'popular',

    },
    {
        id: 7,
        title: "Speedo E-Gift Card",
        image: "/deals/speedogift.jpeg",
        discount: "5% OFF",
        category: "Fashion",
        description: "Speedo is a premier global swimwear brand specializing in durable, high-performance aquatic gear, including competitive swimwear, goggles, and fitness aids. Known for chlorine-resistant fabrics like Endurance10 and Endurance+, their products range from professional racing suits to recreational watershorts and children's swim aids.",
        collection: 'popular',
    },
    {
        id: 8,
        title: "Giva Silver Coin E-Gift Card",
        image: "/deals/givagift.jpeg",
        discount: "5% OFF",
        category: "Fashion",
        description: DEFAULT_DESC,
        collection: 'popular',
    },
    {
        id: 9,
        title: "Nykaa E-Gift Card",
        image: "/deals/nykaa.jpeg",
        discount: "10% OFF",
        category: "Ecommerce",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 10,
        title: "Dominos E-Gift Card",
        image: "/deals/givagift.jpeg",
        discount: "3% OFF",
        category: "Food",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 11,
        title: "Zomato E-Gift Card",
        image: "/deals/givagift.jpeg",
        discount: "3% OFF",
        category: "Food",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 12,
        title: "Myntra E- gift card",
        image: "/deals/givagift.jpeg",
        discount: "1% OFF",
        category: "Fashion",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 13,
        title: "Flipkart E- gift card",
        image: "/deals/givagift.jpeg",
        discount: "1% OFF",
        category: "Ecommerce",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 14,
        title: "Reliance E- gift card",
        image: "/deals/givagift.jpeg",
        discount: "1% OFF",
        category: "Ecommerce",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 15,
        title: "Ajio E- gift card",
        image: "/deals/givagift.jpeg",
        discount: "5% OFF",
        category: "Fashion",
        description: DEFAULT_DESC,
        collection: 'Bestsellers'
    },
    {
        id: 16,
        title: "Amazon Prime Voucher 3 Months",
        image: "/deals/givagift.jpeg",
        discount: "10% OFF",
        category: "Ecommerce",
        description: DEFAULT_DESC,
        collection: 'Bestsellers',
    },
];

export const deals = rawdeals.map((deal) => ({
  ...deal,
  slug: slugify(deal.title),
}));

export const menuItem = [
    
    {
        name: 'By Occasion',
        section: [
            { name: "Birthday", link: "/consumer/gift-cards" }, 
            { name: "Anniversary", link: "/consumer/gift-cards" }, 
            { name: "Wedding", link: "/consumer/gift-cards" }, 
            { name: "Festivals", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'By Recipient',
        section: [
            { name: "For him", link: "/consumer/gift-cards" }, 
            { name: "For her", link: "/consumer/gift-cards" }, 
            { name: "For Kids", link: "/consumer/gift-cards" }, 
            { name: "For Friends", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'Ecommerce',
        section: [
            { name: "Amazon", link: "/consumer/gift-cards" }, 
            { name: "Flipkart", link: "/consumer/gift-cards" }, 
            { name: "Myntra", link: "/consumer/gift-cards" }, 
            { name: "Nykaa", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'Food & Dining',
        section: [
            { name: "Swiggy", link: "/consumer/gift-cards" }, 
            { name: "Zomato", link: "/consumer/gift-cards" }, 
            { name: "Domino's", link: "/consumer/gift-cards" }, 
            { name: "KFC", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'Entertainment',
        section: [
            { name: "Hotstar", link: "/consumer/gift-cards" }, 
            { name: "Netflix", link: "/consumer/gift-cards" }, 
            { name: "spotify", link: "/consumer/gift-cards" }, 
            { name: "Amazon Prime", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'Travel',
        section: [
            { name: "MakemyTrip", link: "/consumer/gift-cards" }, 
            { name: "GOibibo", link: "/consumer/gift-cards" }, 
            { name: "Yatra", link: "/consumer/gift-cards" }, 
            { name: "IXIGO", link: "/consumer/gift-cards" },
        ],
    },
    {
        name: 'Gaming',
        section: [
            { name: "Steam", link: "/consumer/gift-cards" }, 
            { name: "Playstation", link: "/consumer/gift-cards" }, 
            { name: "xbox", link: "/consumer/gift-cards" }, 
            { name: "Valorant Points", link: "/consumer/gift-cards" },
        ],
    },

];