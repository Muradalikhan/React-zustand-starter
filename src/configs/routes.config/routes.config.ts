import { lazy } from 'react'
import authRoute from './authRoute'
import othersRoute from './othersRoute'
import conceptsRoute from './conceptsRoute'
import type { Routes } from '@/@types/routes'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes: Routes = [
    {
        key: 'dashboard',
        path: '/dashboard',
        component: lazy(() => import('@/views/Dashboard')),
        authority: [],
    },
    {
        key: 'businessTracker',
        path: '/business-tracker',
        component: lazy(() => import('@/views/BusinessTracker')),
        authority: [],
    },
    {
        key: 'transactions',
        path: '/transactions',
        component: lazy(() => import('@/views/Transactions')),
        authority: [],
    },
    {
        key: 'goals',
        path: '/goals',
        component: lazy(() => import('@/views/Goals')),
        authority: [],
    },
    {
        key: 'schedule',
        path: '/schedule',
        component: lazy(() => import('@/views/Schedule')),
        authority: [],
    },
    {
        key: 'collapseMenu.performance',
        path: '/reports/performance',
        component: lazy(() => import('@/views/reports/Performance')),
        authority: [],
    },
    {
        key: 'collapseMenu.monthly',
        path: '/reports/monthly',
        component: lazy(() => import('@/views/reports/Monthly')),
        authority: [],
    },
    ...conceptsRoute,
    ...othersRoute,
]
