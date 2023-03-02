import numeral from 'numeral';

const currencyFormat = (n) => numeral(n).format('0,0.00');

export default currencyFormat;
