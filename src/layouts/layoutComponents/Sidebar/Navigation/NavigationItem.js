import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function NavigationItem({ title, icon, iconActive, to }) {
    return (
        <NavLink
            className={({ isActive }) => {
                return cx('nav-item', {
                    active: isActive,
                });
            }}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <h3 className={cx('title')}>{title}</h3>
        </NavLink>
    );
}

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    iconActive: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
};

export default NavigationItem;
