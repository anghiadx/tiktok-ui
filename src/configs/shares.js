import SvgIcon from '~/components/SvgIcon';
import {
    iconEmail,
    iconEmbed,
    iconFacebookShare,
    iconLine,
    iconLink,
    iconLinkedIn,
    iconPinterest,
    iconPlaneShare,
    iconTelegram,
    iconTwitter,
    iconWhatsApp,
} from '~/components/SvgIcon/iconsRepo';

const shares = [
    {
        title: 'Nhúng',
        icon: <SvgIcon icon={iconEmbed} />,
    },
    {
        title: 'Gửi đến bạn bè',
        icon: <SvgIcon icon={iconPlaneShare} />,
    },
    {
        title: 'Chia sẻ với Facebook',
        icon: <SvgIcon icon={iconFacebookShare} />,
        href: 'https://facebook.com',
    },
    {
        title: 'Chia sẻ với WhatsApp',
        icon: <SvgIcon icon={iconWhatsApp} />,
        href: 'https://wa.me',
    },
    {
        title: 'Sao chép liên kết',
        icon: <SvgIcon icon={iconLink} />,
    },
    {
        title: 'Chia sẻ với Twitter',
        icon: <SvgIcon icon={iconTwitter} />,
        href: 'https://twitter.com',
    },
    {
        title: 'Chia sẻ với LinkedIn',
        icon: <SvgIcon icon={iconLinkedIn} />,
        href: 'https://www.linkedin.com',
    },
    {
        title: 'Chia sẻ với Telegram',
        icon: <SvgIcon icon={iconTelegram} />,
        href: 'https://t.me',
    },
    {
        title: 'Chia sẻ với Email',
        icon: <SvgIcon icon={iconEmail} />,
        href: 'mailto:',
    },
    {
        title: 'Chia sẻ với Line',
        icon: <SvgIcon icon={iconLine} />,
        href: 'https://lineit.line.me',
    },
    {
        title: 'Chia sẻ với Pinterest',
        icon: <SvgIcon icon={iconPinterest} />,
        href: 'https://pinterest.com',
    },
];

export default shares;
