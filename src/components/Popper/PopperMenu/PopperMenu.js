import PropTypes from 'prop-types';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import PopperMenuItem from './PopperMenuItem';
import styles from './PopperMenu.module.scss';
import { PopperWrapper, HeaderChildrenPopper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function PopperMenu({
    user = { currentUser: false },
    children,
    items = [],
    hideOnClick = false,
    onChange = () => {},
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const popperHeader = () => {
        if (user.currentUser) {
            return <AccountItem data={user} userPrimary />;
        }
    };

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <PopperMenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, -1));
    };

    const renderCoreMenu = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('wrapper-menu')}>
                {history.length > 1 ? (
                    <HeaderChildrenPopper
                        title={current.title}
                        onBack={handleBackMenu}
                    />
                ) : (
                    popperHeader()
                )}
                <div className={cx('wrapper-item')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    //Hide will reset to first menu
    const handleResetMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            offset={[14, 10]}
            delay={[0, 600]}
            placement="bottom-end"
            render={renderCoreMenu}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

PopperMenu.propTypes = {
    user: PropTypes.object,
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};

export default PopperMenu;
