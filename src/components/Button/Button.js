import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    children,
    primary = false,
    color = false,
    outline = false,
    rounded = false,
    xsmall = false,
    small = false,
    large = false,
    href,
    to,
    leftIcon,
    rightIcon,
    disable = false,
    className,
    iconClassName,
    ...props
}) {
    let Component = 'button';

    if (href) {
        Component = 'a';
    } else if (to) {
        Component = Link;
    }

    disable &&
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });

    const btnProps = {
        href,
        to,
        ...props,
    };

    const classNames = cx('btn', {
        // btn type
        primary,
        color,
        outline,
        rounded,

        // btn size
        xsmall,
        small,
        large,

        // disable style
        disable,

        // Custom via external class
        [className]: className,
    });

    const iconClassNames = cx('icon', {
        [iconClassName]: iconClassName,
    });

    return (
        <Component className={classNames} {...btnProps}>
            {leftIcon && <span className={iconClassNames}>{leftIcon}</span>}
            <span className={cx('text')}>{children}</span>
            {rightIcon && <span className={iconClassNames}>{rightIcon}</span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    color: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    href: PropTypes.string,
    to: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    disable: PropTypes.bool,
    className: PropTypes.string,
    iconClassName: PropTypes.string,
};

export default Button;
