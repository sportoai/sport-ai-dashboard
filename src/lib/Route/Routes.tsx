import React from 'react'
import  { Routes ,  Route } from "react-router-dom"
import Upload from '@/Pages/Upload'
import Analytics from '@/Pages/Analytics'
import Profile from '@/Pages/Profile'
import Highlights from '@/Pages/Highlights'
import Settings from "@/Pages/Settings"

import DashboardLayout from "@/Pages/layout"

export const layoutRoute = ({
  path,
  component,
}: {
  path: string
  component: React.ReactNode
}) => {
  return (
    <>
      <Route
        path={path}
        element={<DashboardLayout>{component}</DashboardLayout>}
      />
    </>
  )
}

export const flatRoute = ({
  path,
  component,
}: {
  path: string
  component: React.ReactNode
}) => <Route path={path} element={component} />





 const AppRoutes = () => {
   return (
     <Routes>

       {layoutRoute({ path: "/", component: <Analytics /> })}
       {layoutRoute({ path: "/upload", component: <Upload /> })}
       {layoutRoute({
         path: "/highlights",
         component: <Highlights />,
       })}
       {layoutRoute({
         path: "/profile",
         component: <Profile />,
       })}
       {layoutRoute({
         path: "/settings",
         component: <Settings />,
       })}
       {layoutRoute({
         path: "/analytics",
         component: <Analytics />,
       })}
     </Routes>
   )
 }

export default AppRoutes
