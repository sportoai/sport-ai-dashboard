import React from 'react'
import { BackgroundBeams } from '../Components/ui/background-beams'
import { PinContainer } from '@/Components/ui/3d-pin'
import { AnimatedPinDemo } from '@/Components/ui/AnimatedPinDemo'
// import {
//   Navbar,
//   NavBody,
//   NavItems,
//   MobileNav,
//   NavbarLogo,
//   NavbarButton,
//   MobileNavHeader,
//   MobileNavToggle,
//   MobileNavMenu,
// } from "@/components/ui/resizable-navbar"
// import { NavMenu } from '@/Components/ui/Navbar'
import { SidebarDemo } from '@/Components/ui/Sidebardemo'

const Dashboard = () => {
  return (
    <div>
      {/* <div className="bg-[#000000] w-full h-[100vh]"> */}
      {/* <NavMenu /> */}
      <BackgroundBeams />
      <SidebarDemo />

      {/* </div> */}
    </div>
  )
}

export default Dashboard
