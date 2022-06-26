import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {
    faKeyboard,
    faLightbulb,
    faAddressCard,
} from '@fortawesome/free-regular-svg-icons';

import {
    PencilSquare,
    CastIcon,
    ChatSquareDotsIcon,
    BellIcon,
    LanguageIcon,
    HalfSquareIcon,
    BrightnessHighIcon,
    MoonStarsIcon,
    GearIcon,
} from '~/components/Icons';
import config from '~/config';

export const ACTION_ITEMS = [
    {
        content: 'Đăng Bài Viết',
        icon: <PencilSquare height="22px" width="22px" />,
        to: config.routes.post,
        class: 'action-btn',
    },
    {
        content: 'Phát Trực Tiếp',
        icon: <CastIcon height="22px" width="22px" />,
        to: config.routes.setUpLiveStream,
        class: 'action-btn',
    },
    {
        content: 'Tin Nhắn',
        icon: <ChatSquareDotsIcon height="22px" width="22px" />,
        to: config.routes.messages,
        class: 'action-btn',
    },
    {
        content: 'Thông Báo',
        icon: <BellIcon height="22px" width="22px" />,
        class: {
            'action-btn': true,
            'action-btn-bell': true,
        },
    },
];

export const MENU_ITEMS = [
    {
        type: 'languageParrent',
        icon: <LanguageIcon height="20px" width="20px" />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt (Việt Nam)',
                    class: 'noIcon',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    class: 'noIcon',
                },
                {
                    type: 'language',
                    code: 'zh-chs',
                    title: '中国话 (中国)',
                    class: 'noIcon',
                },
                {
                    type: 'language',
                    code: 'zh-cht',
                    title: '中國話 (台灣)',
                    class: 'noIcon',
                },
            ],
        },
    },
    {
        type: 'dark-light-mode',
        icon: <HalfSquareIcon height="18px" width="18px" />,
        title: 'Giao Diện Sáng - Tối',
        children: {
            title: 'Giao Diện Sáng - Tối',
            data: [
                {
                    type: 'light-mode',
                    title: 'Giao Diện Sáng',
                    icon: <BrightnessHighIcon height="22px" width="22px" />,
                    class: 'spinHover',
                },
                {
                    type: 'dark-mode',
                    title: 'Giao Diện Tối',
                    icon: <MoonStarsIcon height="18px" width="18px" />,
                    class: 'waverReverseHover',
                },
            ],
        },
    },
    {
        type: 'short-key',
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Tổ Hợp Phím Tắt',
    },
];

export const USER_MENU_ITEMS = [
    {
        type: 'profile',
        icon: <FontAwesomeIcon icon={faAddressCard} />,
        title: 'Trang Cá Nhân',
        to: config.routes.profile,
    },
    ...MENU_ITEMS,
    {
        type: 'feedback@report',
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        title: 'Góp Ý Và Báo Cáo',
    },
    {
        type: 'setting',
        icon: <GearIcon height="20px" width="20px" />,
        title: 'Cài Đặt',
        to: config.routes.setting,
        class: 'spinHover',
    },
    {
        type: 'logout',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng Xuất',
        class: 'separate',
    },
];
