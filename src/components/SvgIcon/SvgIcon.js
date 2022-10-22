import PropTypes from 'prop-types';
function SvgIcon({ icon, size, className, onClick }) {
    return (
        <i className={className} style={{ lineHeight: 0, fontSize: size }} onClick={onClick}>
            {icon}
        </i>
    );
}

SvgIcon.propTypes = {
    icon: PropTypes.element,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default SvgIcon;
