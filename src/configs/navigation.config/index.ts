import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE,
} from '@/constants/navigation.constant'

import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'nav.home',
        icon: 'dashboardAnalytic',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'businessTracker',
        path: '/business-tracker',
        title: 'Business Tracker',
        translateKey: 'nav.singleMenuItem',
        icon: 'projects',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'transactions',
        path: '/transactions',
        title: 'Transactions',
        translateKey: 'nav.singleMenuItem',
        icon: 'transactions',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'goals',
        path: '/goals',
        title: 'Goals',
        translateKey: 'nav.singleMenuItem',
        icon: 'goals',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'schedule',
        path: '/schedule',
        title: 'Schedule',
        translateKey: 'nav.singleMenuItem',
        icon: 'calendar',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'collapseMenu',
        path: '',
        title: 'Reports',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'graph',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseMenu.performance',
                path: '/reports/performance',
                title: 'Performance',
                translateKey: 'nav.collapseMenu.performance',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseMenu.monthly',
                path: '/reports/monthly',
                title: 'Monthly',
                translateKey: 'nav.collapseMenu.monthly',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
        ],
    },
]

export default navigationConfig
