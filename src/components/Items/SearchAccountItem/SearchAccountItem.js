import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SearchAccountItem.module.scss';
import Img from '~/components/Img';
import ShowTick from '~/components/ShowTick';

const cx = classNames.bind(styles);

function SearchAccountItem({ accountInfo, className, onClick }) {
    const { avatar: avatarUrl, nickname: userName, full_name: fullName, tick } = accountInfo;

    return (
        <Link
            to={`/@${userName}`}
            className={cx('wrapper', {
                [className]: className,
            })}
            onClick={onClick}
        >
            <Img className={cx('avatar')} src={avatarUrl} alt={fullName} />
            <div className={cx('body')}>
                <h4 className={cx('username')}>
                    {userName}
                    {<ShowTick tick={tick} />}
                </h4>
                <p className={cx('name')}>{fullName}</p>
            </div>
        </Link>
    );
}

SearchAccountItem.propTypes = {
    accountInfo: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default memo(SearchAccountItem);
