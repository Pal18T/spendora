import React, { Suspense } from 'react'
import { BarLoader } from 'react-spinners'
import DashboardPage from './page'

const Dashboardlayout = () => {
  return (
    <div className="px-5">
        <h1 className='text-6xl font-extrabold gradient-title mb-5'>Dashboard</h1>
        {/* Dashboard page */}

        <Suspense fallback={<BarLoader className="mt-4" width={"100%}"}/>}>
            <DashboardPage />
        </Suspense>
    </div>
  )
}

export default Dashboardlayout