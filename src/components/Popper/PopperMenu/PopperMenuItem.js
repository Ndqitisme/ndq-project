import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './PopperMenu.module.scss';

const cx = classNames.bind(styles);

function PopperMenuItem({ data, onClick }) {
    const classes = cx('menu-item', data.class);

    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

PopperMenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};

export default PopperMenuItem;
