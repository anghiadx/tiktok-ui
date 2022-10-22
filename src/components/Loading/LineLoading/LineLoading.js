import classNames from 'classnames/bind';

import styles from './LineLoading.module.scss';

const cx = classNames.bind(styles);

function LineLoading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('loading-bar')}></div>
        </div>
    );
}

export default LineLoading;
