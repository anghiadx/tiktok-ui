import PropTypes from 'prop-types';
import 'normalize.css';
import './GlobalStyle.scss';

function GlobalStyle({ children }) {
    return children;
}

GlobalStyle.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyle;
