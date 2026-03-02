const paths = {
    home(){
        return '/';
    },
    brands() {
        return `/consumer/gift-cards`;
    },
    categories() {
        return `/consumer/gift-cards/filter`;
    },

    giftcardshowpage(giftSlug: string) {
        return `/consumer/gift-cards/${giftSlug}`;
    },
};

export default paths;