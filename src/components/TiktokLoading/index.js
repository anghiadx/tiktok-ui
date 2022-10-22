import classNames from 'classnames/bind';
import styles from './TiktokLoading.module.scss';

const cx = classNames.bind(styles);

function TiktokLoading({ small = false }) {
    return <div id={cx('loader')} className={cx({ small })} />;
}

export default TiktokLoading;
