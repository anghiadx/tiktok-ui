import { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import SuggestVideo from '~/components/Videos/SuggestVideo';
import { videoService } from '~/services';
import TiktokLoading from '~/components/TiktokLoading';
import SvgIcon from '~/components/SvgIcon';
import VideoContext from '~/Context/VideoContext';

const cx = classNames.bind(styles);

function Home() {
    // State
    const [videoList, setVideoList] = useState([]);
    const [page, setPage] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(true);

    // Ref
    const pageRandom = useRef([]);
    const inViewArr = useRef([]);

    // Set value for context
    const contextValue = {
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        inViewArr: inViewArr.current,
    };

    // Call API to load video list
    useEffect(() => {
        if (page < 1) return;

        const fetchVideoList = async () => {
            const result = await videoService.getSuggestVideo(page);

            // random video in list result
            result.sort(() => Math.random() - 0.5);

            setVideoList([...videoList, ...result]);
        };

        fetchVideoList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleRandomPage = (min, max) => {
        const countPage = max + 1 - min;
        const randomList = pageRandom.current;
        let page;

        if (randomList.length >= countPage) {
            randomList.length === countPage && randomList.push(max);
            page = ++randomList[randomList.length - 1];

            return page;
        }

        do {
            page = Math.floor(Math.random() * countPage + min);
        } while (randomList.includes(page));

        randomList.push(page);

        return page;
    };

    return (
        <VideoContext value={contextValue}>
            <div className={cx('wrapper')}>
                {videoList.map((video, index) => {
                    return (
                        <InView key={index} threshold={0.8}>
                            {({ inView, ref: observeRef }) => (
                                <SuggestVideo ref={observeRef} isInView={inView} videoInfo={video} videoId={index} />
                            )}
                        </InView>
                    );
                })}
                <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}>
                    <SvgIcon className={cx('auto-load-more')} icon={<TiktokLoading />} />
                </InView>
            </div>
        </VideoContext>
    );
}

export default Home;
