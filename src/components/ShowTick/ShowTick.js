import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ShowTick.module.scss';
import SvgIcon from '~/components/SvgIcon';
import { iconTick } from '~/components/SvgIcon/iconsRepo';

const cx = classNames.bind(styles);

function CheckTick({ tick }) {
    return tick && <SvgIcon className={cx('tick')} icon={iconTick} />;
}

CheckTick.propTypes = {
    tick: PropTypes.bool.isRequired,
};

export default CheckTick;
