import PropTypes from 'prop-types';
import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ShowAccount.module.scss';
import AccountItem from '~/components/Items/AccountItem';
import BorderTopContainer from '~/components/BorderTopContainer';
import AccountLoading from '~/components/Loading/AccountLoading';
const cx = classNames.bind(styles);

function ShowAccount({ title, accountItems, hoverActivate, btnTitle, loading = false, onClick }) {
    const isLoad = loading || accountItems.length === 0;
    const customTippy = useRef({ placement: 'bottom', offset: [-32, 0] });

    return (
        <BorderTopContainer className={cx('wrapper')}>
            <h3 className={cx('title')}>{title}</h3>
            <div className={cx('content')}>
                {accountItems.map((item, index) => (
                    <AccountItem
                        key={index}
                        accountInfo={item}
                        hoverActivate={hoverActivate}
                        customTippy={customTippy.current}
                    />
                ))}

                {(isLoad && <AccountLoading />) || (
                    <b className={cx('see-more-btn')} onClick={onClick}>
                        {btnTitle}
                    </b>
                )}
            </div>
        </BorderTopContainer>
    );
}

ShowAccount.propTypes = {
    title: PropTypes.string,
    accountItems: PropTypes.array.isRequired,
    hoverActivate: PropTypes.bool,
    btnTitle: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
};

export default ShowAccount;
