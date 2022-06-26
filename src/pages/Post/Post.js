import classNames from 'classnames/bind';

import styles from './Post.module.scss';

const cx = classNames.bind(styles);

function Post() {
    return (
        <div>
            <h2 className={cx('title')}>Đăng bài viết</h2>
            <br />
            <textarea
                className={cx('textarea-box')}
                placeholder="Nhập nội dung bài viết..."
                name="text"
                id="text"
                rows="15"
            ></textarea>
        </div>
    );
}

export default Post;
