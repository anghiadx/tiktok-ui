import { useState, useEffect, memo } from 'react';
import ShowAccount from '~/components/ShowAccount';
import configs from '~/configs';
import { accountService } from '~/services';

function FollowedAccount() {
    const [accountList, setAccountList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [fulled, setFulled] = useState(false);
    const [seeMore, setSeeMore] = useState(true);

    // Get config
    const { defaultShowFollowed: numOfAccount } = configs.accounts;

    const currentList = seeMore ? accountList : accountList.slice(0, numOfAccount);
    const btnTitle = seeMore && fulled ? 'Ẩn bớt' : 'Xem thêm';

    useEffect(() => {
        const fetchAPI = async () => {
            setLoading(true);
            const result = await accountService.getSuggestedAccount(numOfAccount, page);

            result.length !== 0 ? setAccountList([...accountList, ...result]) : setFulled(true);
            setLoading(false);
        };

        fetchAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleLoadMore = () => {
        return setPage(page + 1);
    };

    const handleShowHide = () => {
        return setSeeMore(!seeMore);
    };

    const handleClick = !fulled ? handleLoadMore : handleShowHide;

    const options = {
        btnTitle,
        loading,
    };

    return (
        // In case of not following anyone, it will not be displayed
        (page === 1 && fulled) || (
            <ShowAccount title="Tài khoản sắp follow" accountItems={currentList} onClick={handleClick} {...options} />
        )
    );
}

export default memo(FollowedAccount);
