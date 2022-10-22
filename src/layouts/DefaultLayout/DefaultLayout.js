import classNames from 'classnames/bind';
import styles from './defaultLayout.module.scss';
import { Header, Sidebar } from '../layoutComponents';
import DownloadApp from '~/components/DownloadApp';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <DownloadApp />
        </div>
    );
}

export default DefaultLayout;
