export default price => (
  price !== undefined ? `$${(price / 1000).toFixed(2)}` : '$0.00'
);
