import PropTypes from 'prop-types';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import PopperWrapper from '~/components/Popper';
import Button from '~/components/Button';
import Img from '~/components/Img';
import ShowTick from '~/components/ShowTick';

const cx = classNames.bind(styles);

function AccountPreview({
    children,
    className,
    avatarUrl,
    userName,
    fullName,
    tick,
    followerCount,
    likeCount,
    bio,
    customTippy,
}) {
    const renderPreview = (attrs) => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper
                className={cx('preview-account', {
                    [className]: className,
                })}
            >
                {/* Header */}
                <div className={cx('preview-header')}>
                    <Link to={`/@${userName}`} className={cx('')}>
                        <Img className={cx('avatar')} src={avatarUrl} alt={fullName} />
                    </Link>
                    <Button color>Follow</Button>
                </div>

                {/* Body */}
                <Link to={`/@${userName}`} className={cx('preview-body')}>
                    <span className={cx('username')}>{userName}</span>
                    {<ShowTick tick={tick} />}
                    <br />
                    <span className={cx('name')}>{fullName}</span>
                </Link>

                {/* Footer */}
                <footer className={cx('preview-footer')}>
                    <b className={cx('user-status')}>{followerCount}</b>
                    <span className={cx('user-status-title')}>Follower</span>
                    <b className={cx('user-status')}>{likeCount}</b>
                    <span className={cx('user-status-title')}>Thích</span>

                    {bio && <div className={cx('bio')}>{bio}</div>}
                </footer>
            </PopperWrapper>
        </div>
    );

    return (
        // Interactive tippy element may not be accessible via keyboard navigation because it is not directly
        // after the reference element in the DOM source order.

        // Using a wrapper <span> tag around the reference element solves this by creating
        <span>
            <TippyHeadless
                // visible
                placement="bottom-start"
                interactive
                delay={[1000, 0]}
                {...customTippy}
                render={renderPreview}
            >
                {children}
            </TippyHeadless>
        </span>
    );
}

AccountPreview.propTypes = {
    children: PropTypes.element,
    className: PropTypes.string,
    avatarUrl: PropTypes.string,
    userName: PropTypes.string,
    fullName: PropTypes.string,
    tick: PropTypes.bool,
    bio: PropTypes.string,
    customTippy: PropTypes.object,
};

export default AccountPreview;
