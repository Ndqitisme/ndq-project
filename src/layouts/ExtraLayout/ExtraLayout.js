import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Header from '~/layouts/components/Header';
import styles from './ExtraLayout.module.scss';

const cx = classNames.bind(styles);

function ExtraLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

ExtraLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ExtraLayout;
