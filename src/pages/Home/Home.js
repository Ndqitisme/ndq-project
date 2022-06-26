import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import { actions, useGlobalState } from '~/components/GlobalState';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    const [globalState, dispatch] = useGlobalState();

    // Fake API

    return (
        <div className={cx('wrapper')}>
            <h1>Trang Chủ</h1>
            <p>Demo Khung Web</p>
            <h3>Music Main Web: Demon Slayer LQM</h3>
            <br />
            <h3>Author: Nguyễn Đức Quý</h3>
            <h4>Age: 19</h4>
            <h4>Email: Ndqitisme@gmail.com</h4>
            <h4>Ngôn Ngữ Lập Trình: JavaScript</h4>
            <h4>Thư Viện Xây Dựng: React JS</h4>
            <br />
            <h2>ID Page Number: {globalState.idPage}</h2>
            <Button
                rounded
                onClick={() => {
                    dispatch(actions.changeIdPage(globalState.idPage + 1));
                }}
            >
                Increase Id Page
            </Button>
            <br />
            <br />
            <br />
            <h4>Declarative</h4>
            <p>
                {' '}
                React giúp tạo các UI tương tác một cách dễ dàng. Thiết kế các
                khung nhìn đơn giản cho từng trạng thái trong ứng dụng của bạn,
                và React sẽ cập nhật và render đúng các thành phần phù hợp khi
                dữ liệu của bạn thay đổi. Việc khai báo các khung nhìn tường
                minh sẽ khiến cho mã của bạn dễ sử dụng hơn và dễ dàng gỡ lỗi
                hơn.
            </p>
            <br />
            <br />
            <h4>Component-Based</h4>
            <p>
                {' '}
                Xây dựng các component và quản lý các trạng thái của riêng
                chúng, sau đó kết hợp chúng để tạo các UI phức tạp. Vì component
                logic được viết bằng JavaScript thay vì các template, bạn có thể
                dễ dàng truyền dữ liệu đa dạng qua ứng dụng của mình và tránh
                thao tác với DOM.
            </p>
            <br />
            <br />
            <h4>Learn Once, Write Anywhere</h4>
            <p>
                {' '}
                Chúng tôi không đưa ra các giả định về phần kĩ năng công nghệ
                của bạn, vì vậy bạn có thể phát triển các tính năng mới trong
                React mà không cần viết lại mã hiện có. React cũng có thể render
                trên máy chủ bằng Node và xây dựng ứng dụng di động bằng cách sử
                dụng React Native.
            </p>
            <br />
            <br />
        </div>
    );
}

export default Home;
