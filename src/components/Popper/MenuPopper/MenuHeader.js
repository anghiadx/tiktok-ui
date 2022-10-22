import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './menuPopper.module.scss';
import SvgIcon from '~/components/SvgIcon';
import { iconArrowLeft } from '~/components/SvgIcon/iconsRepo';

const cx = classNames.bind(styles);

function MenuHeader({ title, onBack }) {
    return (
        <div className={cx('menu-header')}>
            <span className={cx('header-back-btn')} onClick={onBack}>
                <SvgIcon icon={iconArrowLeft} size={20} />
            </span>
            <span className={cx('header-title')}>{title}</span>
        </div>
    );
}

MenuHeader.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};

export default MenuHeader;
