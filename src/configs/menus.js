import SvgIcon from '~/components/SvgIcon';
import {
    iconKeyboard,
    iconLanguge,
    iconLogout,
    iconProfile,
    iconQuestion,
    iconSetting,
    iconTiktokCoin,
    iconTiktokLive,
} from '~/components/SvgIcon/iconsRepo';

export const PUBLIC_MENU = [
    {
        icon: <SvgIcon icon={iconLanguge} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Ngôn ngữ',
            data: [
                {
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    title: 'English',
                },
                {
                    title: 'العربية',
                },
                {
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    title: 'Čeština (Česká republika)',
                },
                {
                    title: 'Deutsch',
                },
                {
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    title: 'Español',
                },
                {
                    title: 'Suomi (Suomi)',
                },
                {
                    title: 'Filipino (Pilipinas)',
                },
                {
                    title: 'Français',
                },
                {
                    title: 'हिंदी',
                },
                {
                    title: 'Magyar (Magyarország)',
                },
                {
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    title: 'Italiano (Italia)',
                },
                {
                    title: '日本語（日本）',
                },
                {
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    title: '한국어 (대한민국)',
                },
                {
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    title: 'Nederlands (Nederland)',
                },
                {
                    title: 'Polski (Polska)',
                },
                {
                    title: 'Português (Brasil)',
                },
                {
                    title: 'Română (Romania)',
                },
                {
                    title: 'Русский (Россия)',
                },
                {
                    title: 'Svenska (Sverige)',
                },
                {
                    title: 'ไทย (ไทย)',
                },
                {
                    title: 'Türkçe (Türkiye)',
                },
                {
                    title: 'Українська (Україна)',
                },
                {
                    title: 'اردو',
                },
                {
                    title: '简体中文',
                },
                {
                    title: '繁體中文',
                },
            ],
        },
    },
    {
        icon: <SvgIcon icon={iconQuestion} />,
        title: 'Phản hồi và trợ giúp',
        to: '/feedback',
    },
    {
        icon: <SvgIcon icon={iconKeyboard} />,
        title: 'Phím tắt',
    },
];

export const PRIVATE_MENU = [
    {
        icon: <SvgIcon icon={iconProfile} />,
        title: 'Xem hồ sơ',
    },
    {
        icon: <SvgIcon icon={iconTiktokCoin} />,
        title: 'Nhận xu',
    },
    {
        icon: <SvgIcon icon={iconTiktokLive} />,
        title: 'LIVE Studio',
    },
    {
        icon: <SvgIcon icon={iconSetting} />,
        title: 'Cài đặt',
    },

    ...PUBLIC_MENU,

    {
        icon: <SvgIcon icon={iconLogout} />,
        title: 'Đăng xuất',
        separate: true,
    },
];
