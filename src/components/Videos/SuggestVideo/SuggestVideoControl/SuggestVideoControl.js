import PropTypes from 'prop-types';
import { useEffect, useRef, useState, useContext, forwardRef } from 'react';
import classNames from 'classnames/bind';

import SvgIcon from '~/components/SvgIcon';
import { iconFlag, iconMute, iconPauseVideo, iconPlayVideo, iconVolume } from '~/components/SvgIcon/iconsRepo';
import TiktokLoading from '~/components/TiktokLoading';
import styles from './SuggestVideoControl.module.scss';
import { VideoContextKey } from '~/Context/VideoContext';

const cx = classNames.bind(styles);

const SuggestVideoControl = forwardRef(({ videoId, videoInfo, isInView }, REF) => {
    // Get data from video info
    const {
        thumb_url: thumbUrl,
        file_url: videoUrl,
        meta: {
            video: { resolution_x: videoWidth, resolution_y: videoHeight },
        },
    } = videoInfo;

    const directionVideoClass = videoWidth - videoHeight < 0 ? 'vertical' : 'horizontal';

    // Get data from the context
    const { volumeState, mutedState, inViewArr } = useContext(VideoContextKey);

    // STATE
    const [playing, setPlaying] = useState(false);
    const [defaultStatus, setDefaultStatus] = useState(true);
    const [loading, setLoading] = useState(false);
    const [userInteracting, setUserInteracting] = useState(false);

    const [volume, setVolume] = volumeState;
    const [muted, setMuted] = mutedState;

    // REF
    const videoRef = useRef(null);
    const volumeBarRef = useRef(null);
    const volumeDotRef = useRef(null);

    useEffect(() => {
        playing && setDefaultStatus(false);
        playing ? videoRef.current.play() : videoRef.current.pause();
    }, [playing]);

    useEffect(() => {
        videoRef.current.volume = volume;
    }, [volume]);

    useEffect(() => {
        videoRef.current.muted = muted;
    }, [muted]);

    useEffect(() => {
        volumeDotRef.current.style.height = muted ? '0%' : `${volume * 100}%`;
    }, [volume, muted]);

    useEffect(() => {
        updateInViewArr();

        if (!isInView) {
            handleResetVideo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        if (isInView && !userInteracting) {
            const active = inViewArr.findIndex((inView) => inView === true);
            videoId === active ? setPlaying(true) : handleResetVideo();
        }
    });

    const updateInViewArr = () => {
        inViewArr[videoId] = isInView;

        // Used setVolume to trigger a re-render of the home component, which will help other video elements update the new value of the inViewArr array.
        // The value passed to setVolume is a small decimal number, so it will not affect the user's audio experience.
        setVolume(volume + 0.000001);
    };

    const handleTogglePlayBtn = () => {
        setPlaying(!playing);
        setUserInteracting(true);
    };

    const handleVolumeBtn = () => {
        setMuted(!muted);
    };

    const handleResetVideo = () => {
        // reset time
        videoRef.current.currentTime = 0;
        setPlaying(false);
        setDefaultStatus(true);
        setUserInteracting(false);
    };

    const handleChangeVolume = (e) => {
        const layerOrigin = e.nativeEvent.layerY;
        const fullHeight = volumeBarRef.current.offsetHeight;
        let activeHeight = fullHeight - layerOrigin;
        let percent = (100 / fullHeight) * activeHeight;

        // Set height for dot
        volumeDotRef.current.style.height = `${percent}%`;

        // Set height when mousemove activate
        volumeBarRef.current.onmousemove = (e) => {
            const layerMove = e.layerY;
            if (layerMove === layerOrigin) return;
            console.log('move');

            activeHeight = fullHeight - e.layerY;

            if (activeHeight < 0) {
                setMuted(true);
                return;
            } else if (activeHeight >= fullHeight) {
                activeHeight = fullHeight;
            } else {
                muted && setMuted(false);
            }

            percent = (100 / fullHeight) * activeHeight;

            volumeDotRef.current.style.height = `${percent}%`;
            videoRef.current.volume = percent / 100;
        };

        // Remove mousemove when mouse up or mouse leave outside
        volumeBarRef.current.onmouseup = volumeBarRef.current.onmouseleave = () => {
            volumeBarRef.current.onmousemove = null;

            let volumeRatio = percent / 100;
            let isMute = false;

            if (volumeRatio <= 0) {
                volumeRatio = 0;
                isMute = true;
            } else if (volumeRatio > 1) {
                volumeRatio = 1;
            }

            setVolume(volumeRatio);
            setMuted(isMute);
        };
    };
    return (
        <div className={cx('player-space', directionVideoClass)}>
            <p className={cx('default-space')}></p>
            {loading && playing && <SvgIcon className={cx('video-loading')} icon={<TiktokLoading small />} />}
            <img className={cx('thumb')} src={thumbUrl} alt="" ref={REF} />
            <video
                className={cx('video', {
                    hidden: defaultStatus,
                })}
                loop
                onWaiting={() => setLoading(true)}
                onPlaying={() => setLoading(false)}
                ref={videoRef}
            >
                <source src={videoUrl} />
            </video>

            {/* Video Control */}
            <button className={cx('control', 'report-btn')}>
                <SvgIcon icon={iconFlag} />
                <span>Báo cáo</span>
            </button>

            <button className={cx('control', 'play-control')} onClick={handleTogglePlayBtn}>
                {playing ? <SvgIcon icon={iconPlayVideo} size={20} /> : <SvgIcon icon={iconPauseVideo} size={20} />}
            </button>

            {muted ? (
                <button className={cx('control', 'volume-btn', 'mute')} onClick={handleVolumeBtn}>
                    <SvgIcon icon={iconMute} size={24} />
                </button>
            ) : (
                <button className={cx('control', 'volume-btn')} onClick={handleVolumeBtn}>
                    <SvgIcon icon={iconVolume} size={24} />
                </button>
            )}

            <div className={cx('volume-control')}>
                <div className={cx('volume-bar')} ref={volumeBarRef} onMouseDown={handleChangeVolume}>
                    <div className={cx('volume-dot')} ref={volumeDotRef}></div>
                </div>
            </div>
        </div>
    );
});

SuggestVideoControl.propTypes = {
    videoId: PropTypes.number,
    videoInfo: PropTypes.object.isRequired,
    isInView: PropTypes.bool,
};

export default SuggestVideoControl;
