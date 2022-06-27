// The P/E ratio is calculated by dividing the market
// value price per share by the company's earnings per share.

// we want to return a positive or negiave with a number attached 

export const peRatio = (stockPrice, earningsPerShare) => {
    const peRatio = (stockPrice/earningsPerShare);
    const rating = (peRatio < 20);

    return {
        peRatio,
        rating,
    };
};

export default peRatio;
