import classNames from 'classnames/bind';
import styles from './LoginNotify.module.scss';
import BorderTopContainer from '~/components/BorderTopContainer';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function LoginNotify() {
    return (
        <BorderTopContainer className={cx('login-notify')}>
            <p className={cx('text')}>Đăng nhập để follow các tác giả, thích video và xem bình luận.</p>
            <Button outline large className={cx('login-btn')}>
                Đăng nhập
            </Button>
        </BorderTopContainer>
    );
}

export default LoginNotify;
