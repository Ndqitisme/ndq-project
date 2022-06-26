import PropTypes from 'prop-types';

import './GlobalStyles.scss';

//Nạp Cấu Hình SCSS Cho React App
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
