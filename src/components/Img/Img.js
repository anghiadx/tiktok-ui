import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import assetImages from '~/assets/images';

const Img = forwardRef(function ({ src, alt = '', fallback = assetImages.noImage, ...props }, REF) {
    const [error, setError] = useState(false);

    const handleImageError = () => {
        setError(fallback);
    };
    return <img ref={REF} src={error || src} alt={alt} {...props} onError={handleImageError} />;
});

Img.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Img;
