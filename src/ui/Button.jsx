import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'text uppercase-stone-800 text-sm inline-block rounded-full bg-yellow-400 font-semibold tracking-wide transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';

  const style = {
    primary: base + ' px-4 py-3  md:px-6 md:py-4',
    small: base + ' px-4 py-2  md:px-5 md:py-2.5 text-xs',
    secondary:
      'text uppercase-stone-800 text-sm px-4 py-3  md:px-6 md:py-3.5 inline-block rounded-full  text-stone-400 border-2 border-stone-300 font-semibold tracking-wide transition-colors duration-300 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 hover:text-stone-800 focus:ring-offset-2 disabled:cursor-not-allowed ',
  };
  if (to) {
    return (
      <Link className={style[type]} to="/order/new">
        Order pizzas
      </Link>
    );
  }
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
