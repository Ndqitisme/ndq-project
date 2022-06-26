import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import config from '~/config';
import styles from './ErrorPage404.module.scss';
import audios from '~/assets/audios';

const cx = classNames.bind(styles);

function ErrorPage404() {
    const audioRef = useRef();

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 67) {
                audioRef.current.play();
            } else if (e.keyCode === 80) {
                audioRef.current.pause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>404</div>
            <div className={cx('content')}>Page not found</div>
            <div className={cx('content-1')}>
                Trang bạn cố gắng truy cập không tồn tại
            </div>
            <br />
            <audio
                ref={audioRef}
                src={audios.DemonSlayerLQM}
                autoPlay
                controls
                hidden
            ></audio>
            <Link to={config.routes.home} className={cx('comeback-home')}>
                Quay Về Trang Chủ
            </Link>
            <br />
            <br />
            <div className={cx('content-1')}>
                Nhấn P để dừng nhạc hoặc nhấn C để tiếp tục phát nhạc
            </div>
        </div>
    );
}

export default ErrorPage404;
