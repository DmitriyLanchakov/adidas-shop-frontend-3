export default (price, currency) => (
  price !== undefined ? `${currency}${(price / 1000).toFixed(2)}` : '$0.00'
);
