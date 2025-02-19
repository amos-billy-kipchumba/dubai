import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { usePage } from '@inertiajs/react';

const AppMenu = () => {
    const { auth } = usePage().props;

    const roleId = auth.user?.role_id;

    const model = [
        {
            label: 'Home',
            items: [
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: route('dashboard'), roles: [1, 2, 3] },
                { label: 'Users', icon: 'pi pi-fw pi-users', to: route('users.index'), roles: [1] },
                { label: 'Jobs', icon: 'pi pi-fw pi-briefcase', to: route('jobs.index'), roles: [1] },
                { label: 'Applications', icon: 'pi pi-fw pi-file', to: route('applications.index'), roles: [1, 2, 3] },
                { label: 'Profile', icon: 'pi pi-fw pi-user', to: route('profile.edit'), roles: [1, 2, 3] },
                { label: 'Notifications', icon: 'pi pi-fw pi-bell', to: route('notifications.index'), roles: [1] },
            ]
        },
    ];    

    const filteredModel = model.map(section => ({
        ...section,
        items: section.items.filter(item => item.roles.includes(roleId)),
    })).filter(section => section.items.length > 0); 

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
