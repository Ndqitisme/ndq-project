import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';

import images from '~/assets/images';
import styles from './Image.module.scss';

const noImage = images.noImage;

const Image = forwardRef(
    (
        {
            className,
            src = { noImage },
            alt,
            fallback: customFallback = noImage,
            ...props
        },
        ref
    ) => {
        const [fallback, setFallback] = useState('');

        const handleError = () => {
            setFallback(customFallback);
        };

        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    }
);

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
