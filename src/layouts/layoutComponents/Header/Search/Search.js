import { useState, useRef, useEffect, memo, useCallback } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import SvgIcon from '~/components/SvgIcon';
import { iconClose, iconLoading, iconSearch } from '~/components/SvgIcon/iconsRepo';
import PopperWrapper from '~/components/Popper';
import SeachAccountItem from '~/components/Items/SearchAccountItem';
import { useDebounce } from '~/hooks';
import { searchService } from '~/services';

const cx = classNames.bind(styles);

function Search() {
    const [searchInput, setSearchInput] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    // Ref
    const searchInputRef = useRef();

    const debouncedValue = useDebounce(searchInput, 800);

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const searchResult = await searchService.search(debouncedValue);

            setSearchResult(searchResult);
            setLoading(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    // Handler function
    const handleChangeInput = (e) => {
        const valueInput = e.target.value;
        valueInput.startsWith(' ') || setSearchInput(valueInput);
    };

    const handleClearInput = useCallback((isFocus) => {
        setSearchInput('');
        if (isFocus === true) {
            searchInputRef.current.focus();
        }
    }, []);

    const handleBlurSearch = () => {
        return setShowSearch(false);
    };

    const renderSearchResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <div className={cx('search-result__title')}>Tài khoản</div>
                {searchResult.map((accountItem, index) => (
                    <SeachAccountItem key={index} accountInfo={accountItem} onClick={handleClearInput} />
                ))}
                <div className={cx('search-result__see-full')}>Xem tất cả kết quả dành cho "{searchInput}"</div>
            </PopperWrapper>
        </div>
    );

    return (
        // Interactive tippy element may not be accessible via keyboard navigation because it is not directly
        // after the reference element in the DOM source order.

        // Using a wrapper <span> tag around the reference element solves this by creating
        // a new parentNode context.
        <span>
            <TippyHeadless
                render={renderSearchResult}
                visible={showSearch && searchResult.length > 0 && !!searchInput}
                interactive
                onClickOutside={handleBlurSearch}
            >
                <div className={cx('search-container')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm tài khoản và video"
                        spellCheck="false"
                        value={searchInput}
                        ref={searchInputRef}
                        onChange={handleChangeInput}
                        onFocus={() => {
                            setShowSearch(true);
                        }}
                        onBlur={() => {
                            searchResult.length > 0 || handleBlurSearch();
                        }}
                    />
                    <div className={cx('search-icon-wrapper')}>
                        {loading && (
                            <button className={cx('loading', 'lh0')}>
                                <SvgIcon icon={iconLoading} />
                            </button>
                        )}
                        <button className={cx('clear-btn', 'lh0')} onClick={() => handleClearInput(true)}>
                            <SvgIcon icon={iconClose} />
                        </button>
                    </div>
                    {/* Search btn */}
                    <button className={cx('search-btn', 'lh0')} onMouseDown={(e) => e.preventDefault()}>
                        <SvgIcon icon={iconSearch} size={24} />
                    </button>
                </div>
            </TippyHeadless>
        </span>
    );
}

export default memo(Search);
