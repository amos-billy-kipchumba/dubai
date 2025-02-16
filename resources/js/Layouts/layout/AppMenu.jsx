import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { usePage } from '@inertiajs/react';

const AppMenu = () => {
    const { auth } = usePage().props;

    const roleId = auth.user?.role_id;

    // Define the complete menu model
    const model = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('dashboard'), roles: [1, 2, 3] },
                { label: 'Users', icon: 'pi pi-fw pi-user', to: route('users.index'), roles: [1] },
                { label: 'Profile', icon: 'pi pi-user', to: route('profile.edit'), roles: [1, 2, 3] },
                { label: 'Notifications', icon: 'pi pi-fw pi-bell', to: route('notifications.index'), roles: [1] },
            ]
        },
    ];

    // Filter menu items based on the user's role
    const filteredModel = model.map(section => ({
        ...section,
        items: section.items.filter(item => item.roles.includes(roleId)),
    })).filter(section => section.items.length > 0); // Remove sections with no items

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {filteredModel.map((item, i) => {
                    return !item?.separator ? 
                        <AppMenuitem item={item} root={true} index={i} key={item?.label} />
                     : <li className="menu-separator"></li>;
                })}
            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
