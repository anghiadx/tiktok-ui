import PropTypes from 'prop-types';
import { useState, memo, useEffect } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';

import styles from './menuPopper.module.scss';
import PopperWrapper from '~/components/Popper';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

const cx = classNames.bind(styles);

function MenuPopper({ children, items = [], handleClickMenu, customsTippy = {} }) {
    const [menuItems, setMenuItems] = useState([{ data: items }]);

    useEffect(() => {
        if (items.length === 0) return;

        setMenuItems([{ data: items }]);
    }, [items]);

    const getLastItem = (items) => {
        const lastIndex = items.length - 1;
        return items[lastIndex];
    };

    // Handle when click item had sub menu
    const handleGoMenuChildren = (childrenItem) => {
        return setMenuItems([...menuItems, childrenItem]);
    };

    const handleBackMenuChildren = () => {
        const newMenuItems = [...menuItems];
        newMenuItems.pop();
        return setMenuItems(newMenuItems);
    };

    const renderMenu = (attrs) => (
        <nav className={cx('menu-wrapper')} tabIndex="-1" {...attrs}>
            <div className={cx('arrow-popper')} data-popper-arrow />
            <PopperWrapper
                className={cx('menu-list', {
                    'sub-menu-list': menuItems.length > 1,
                })}
            >
                {menuItems.length > 1 && <MenuHeader title={menuTitle} onBack={handleBackMenuChildren} />}
                <div className={cx('menu-item-wrapper')}>{renderMenuItems()}</div>
            </PopperWrapper>
        </nav>
    );

    // Render menu item
    const renderMenuItems = () => {
        if (currentItems.data.length >= 15) {
            document.body.classList.add('hidden');
        } else {
            document.body.classList.remove('hidden');
        }

        return currentItems.data.map((item, index) => {
            const haveChildren = !!item.children;

            const handleClick = () => {
                haveChildren ? handleGoMenuChildren(item.children) : handleClickMenu(item);
            };

            return <MenuItem key={index} menuInfo={item} onClick={handleClick} isSubMenu={menuItems.length > 1} />;
        });
    };

    // Get data of last element in items array
    const currentItems = getLastItem(menuItems);
    const menuTitle = currentItems.title;

    return (
        <TippyHeadless
            // visible
            render={renderMenu}
            interactive
            placement="bottom-end"
            offset={[20, 12]}
            delay={[0, 700]}
            hideOnClick={false}
            onHidden={() => {
                setMenuItems([menuItems[0]]);
            }}
            {...customsTippy}
        >
            {children}
        </TippyHeadless>
    );
}

MenuPopper.propTypes = {
    children: PropTypes.element,
    items: PropTypes.array,
    defaultClickMenu: PropTypes.func,
    customsTippy: PropTypes.object,
};

export default memo(MenuPopper);
