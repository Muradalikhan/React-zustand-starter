import { lazy, Suspense } from 'react'
import AdaptiveCard from '@/components/shared/AdaptiveCard'

const Security = lazy(() => import('./components/SettingsSecurity'))

const Settings = () => {
    return (
        <AdaptiveCard className="h-full">
            <div className="flex flex-auto h-full">
                <div className="xl:ltr:pl-6 xl:rtl:pr-6 flex-1 py-2">
                    <Suspense fallback={<></>}>
                        <Security />
                    </Suspense>
                </div>
            </div>
        </AdaptiveCard>
    )
}

export default Settings
