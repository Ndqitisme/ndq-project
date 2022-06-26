import { useState, useEffect, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSpinner,
    faXmark,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { PopperWrapper } from '~/components/Popper';
import SearchResult from './SearchResult';
import { useDebounce } from '~/hooks';
import * as searchService from '~/services/searchService';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showSearchResult, setSearchShowResult] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            return setSearchResult([]);
        }

        const fetchApi = async () => {
            setSearchLoading(true);

            const result = await searchService.search(debouncedValue);
            setSearchResult(result);

            setSearchLoading(false);
        };

        fetchApi();
    }, [debouncedValue]);

    const handleChangeInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleHideSearchResult = () => {
        setSearchShowResult(false);
    };

    const handleClearSearch = () => {
        setSearchValue('');
        inputRef.current.focus();
        setSearchResult([]);
    };

    return (
        <div className={cx('search')}>
            <HeadlessTippy
                visible={showSearchResult && searchResult.length > 0}
                interactive={true}
                onClickOutside={handleHideSearchResult}
                render={(attrs) => (
                    <div
                        className={cx('search-result')}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h5 className={cx('result-title')}>
                                Kết Quả Tìm Kiếm: {searchValue}
                            </h5>
                            {<SearchResult data={searchResult} />}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('core')}>
                    {searchLoading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}
                    {!!searchValue && !searchLoading && (
                        <button className={cx('clear')}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                onClick={handleClearSearch}
                            />
                        </button>
                    )}

                    <input
                        ref={inputRef}
                        value={searchValue}
                        onChange={handleChangeInput}
                        onFocus={() => setSearchShowResult(true)}
                        placeholder="Tìm kiếm bài viết, video, phát trực tiếp..."
                    />
                    <span className={cx('search-icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </span>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
