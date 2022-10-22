import classNames from 'classnames/bind';

import styles from './AccountLoading.module.scss';

const cx = classNames.bind(styles);

function AccountLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}></div>
            <div className={cx('body')}>
                <p className={cx('username')}></p>
                <p className={cx('full-name')}></p>
            </div>
        </div>
    );
}

export default AccountLoading;
