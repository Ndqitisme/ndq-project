import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';

import Search from './Search';
import { MENU_ITEMS, ACTION_ITEMS, USER_MENU_ITEMS } from './ITEMS';
import config from '~/config';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import { PopperMenu } from '~/components/Popper';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function Header() {
    //Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Handle Change Language');
                break;
            default:
                console.log(menuItem.title);
        }
    };

    const currentUser = true;

    const userData = {
        id: 1506,
        first_name: 'Nguyễn Đức',
        last_name: 'Quý',
        full_name: 'Nguyễn Thị Hồng Vân',
        nickname: 'ndqnthvitvn',
        avatar: images.nthVan,
        bio: '✨ 2003 Lập Trình Vô Danh !',
        tick: true,
        followings_count: 1976,
        followers_count: 0,
        likes_count: 0,
        website_url: 'https://ndqitisme.github.io/',
        facebook_url: '',
        youtube_url: '',
        twitter_url: '',
        instagram_url: '',
        created_at: '2022-05-05 16:10:05',
        updated_at: '2022-05-05 16:11:39',
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Main */}
                <div className={cx('main')}>
                    <Link to={config.routes.home} className={cx('link-home')}>
                        <Image
                            className={cx('logo')}
                            src={images.logo}
                            alt="NDQ Logo"
                        />
                    </Link>
                    <h3 className={cx('title')}>Build and Design by NDQ</h3>
                </div>

                {/* Search */}
                <Search />

                {/* Action */}
                <div className={cx('action')}>
                    {currentUser ? (
                        <div className={cx('wrapper-login')}>
                            {ACTION_ITEMS.map((item, index) => {
                                if (item.to) {
                                    return (
                                        <Tippy
                                            key={index}
                                            placement="bottom"
                                            content={item.content}
                                        >
                                            <NavLink
                                                to={item.to}
                                                className={({ isActive }) =>
                                                    cx(item.class, {
                                                        active: isActive,
                                                    })
                                                }
                                            >
                                                {item.icon}
                                            </NavLink>
                                        </Tippy>
                                    );
                                } else {
                                    return (
                                        <Tippy
                                            key={index}
                                            placement="bottom"
                                            content={item.content}
                                        >
                                            <button className={cx(item.class)}>
                                                {item.icon}
                                            </button>
                                        </Tippy>
                                    );
                                }
                            })}
                        </div>
                    ) : (
                        <div className={cx('wrapper-unlogin')}>
                            <Button primary to="/login">
                                Login
                            </Button>
                            <Button to="/register" outline>
                                Register
                            </Button>
                        </div>
                    )}

                    <PopperMenu
                        //Test
                        user={{ currentUser, ...userData }}
                        //Test

                        items={currentUser ? USER_MENU_ITEMS : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar-user')}
                                src={images.nthVan}
                                alt="Avatar User"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        )}
                    </PopperMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
