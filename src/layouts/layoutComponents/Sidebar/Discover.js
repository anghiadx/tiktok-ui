import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import BorderTopContainer from '~/components/BorderTopContainer';
import Button from '~/components/Button';
import SvgIcon from '~/components/SvgIcon';
import { iconTag, iconMusic } from '~/components/SvgIcon/iconsRepo';
import LineLoading from '~/components/Loading/LineLoading';

const cx = classNames.bind(styles);

const discoverListFake = [
    {
        type: 'hashtag',
        title: 'suthatla',
    },
    {
        type: 'hashtag',
        title: 'mackedoi',
    },
    {
        type: 'hashtag',
        title: 'sansangthaydoi',
    },

    {
        type: 'music',
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
    },
    {
        type: 'music',
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
    },
    {
        type: 'music',
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
    },
    {
        type: 'hashtag',
        title: '7749hieuung',
    },
    {
        type: 'hashtag',
        title: 'genzlife',
    },
    {
        type: 'music',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        type: 'music',
        title: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham',
    },
];

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setDiscoverList(discoverListFake);
        }, 5000);
    }, []);

    return (
        <BorderTopContainer className={cx('discover-container')}>
            <h3 className={cx('title')}>Khám phá</h3>
            <section className={cx('content')}>
                {discoverList.map((disItem, index) => {
                    const isHashtag = disItem.type === 'hashtag';
                    return (
                        <Button
                            key={index}
                            className={cx('btn', {
                                hashtag: isHashtag,
                            })}
                            primary
                            xsmall
                            rounded
                            leftIcon={<SvgIcon icon={isHashtag ? iconTag : iconMusic} />}
                        >
                            {disItem.title}
                        </Button>
                    );
                })}
                {discoverList.length < 1 && (
                    <>
                        <LineLoading />
                        <LineLoading />
                    </>
                )}
            </section>
        </BorderTopContainer>
    );
}

export default Discover;
