import React, { useState } from "react"
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar"
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react"
import { IoIosNotifications } from "react-icons/io"
import { GiTrophyCup } from "react-icons/gi"


import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { HoverEffect } from "./card-hover-effect"
import { FiUpload } from "react-icons/fi"
import { SiGoogleanalytics } from "react-icons/si"
import { IoIosPeople } from "react-icons/io"

import { PiVideo } from "react-icons/pi"



export function SidebarDemo() {
  const links = [
    {
      label: "Dashboard",
      href: "#",
      icon: (
        <IconBrandTabler className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Analytics",
      href: "#",
      icon: (
        <GiTrophyCup className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Profile",
      href: "#",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Logout",
      href: "#",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ]
  const [open, setOpen] = useState(false)
  return (
    <div
      className={cn(
        "flex h-screen w-screen flex-row overflow-hidden bg-gray-100 dark:bg-neutral-800"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Abiskardhenga",
                href: "#",
                icon: (
                  <img
                    src="https://res.cloudinary.com/dw3pz7ahl/image/upload/v1731394713/c3j6dh9vobo6ahjz21ez.png"
                    className="h-7 w-7 shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  )
}
export const Logo = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://res.cloudinary.com/dcwtwloem/image/upload/v1753105997/SportAi_cpsfgs.png"
        className="h-7 w-7 shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-black dark:text-white"
      >
        SportoAI{" "}
      </motion.span>
    </a>
  )
}
export const LogoIcon = () => {
  return (
    <a
      href="#"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <img
        src="https://res.cloudinary.com/dcwtwloem/image/upload/v1753105997/SportAi_cpsfgs.png"
        className="h-7 w-7 shrink-0 rounded-full"
        width={50}
        height={50}
        alt="Avatar"
      />
      {/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
    </a>
  )
}

export const projects = [
  {
    title: "Total Video Analyzed",
    description: "1,247",
    link: "https://stripe.com",
  },
  {
    title: "AI Models Active",
    description: "27",
    link: "https://netflix.com",
  },
 
  {
    title: "Team Performance",
    description: "87%",
    link: "https://meta.com",
  },
  {
    title: "Match Highlights",
    description: "456",
    link: "https://amazon.com",
  },

]



const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-neutral-100 dark:bg-neutral-950 p-4">
      <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-4 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100">
              Dashboard
            </h1>
            <p>Analyze your data and gain insights.</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosNotifications className="text-2xl text-neutral-500 dark:text-neutral-300 cursor-pointer hover:text-blue-500 transition" />
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
              Upload
            </button>
            <button className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-neutral-800 transition">
              Import Data
            </button>
          </div>
        </div>
        {/* Hover Effect Projects Section */}
        <div>
          <HoverEffect items={projects} />
        </div>
        <div className="flex">
          <QuickActions/>

        <ModelTrainingProgress />
        </div>
        <RecentActivity/>
      </div>
    </div>
  )
}

const models = [
  {
    title: "Defensive Pattern Recognition",
    percentage : 75,
  },
  {
    title: "Player Movement Analysis",
    percentage: 60,
  },
  {
    title: "Defensive Pattern Recognition",
    percentage: 90,
  },
  {
    title: "Player Movement Analysis",
    percentage: 55,
  },
  {
    title: "Offensive Strategy Optimization",
    percentage: 90,
  },
   
]

const ModelTrainingProgress = () => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900 shadow-sm">
      <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
        Model Training Progress
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Current AI model training status
      </p>

      <div className="flex flex-col gap-5">
        {models.map((model, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {model.title}
              </span>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                {model.percentage}%
              </span>
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
                style={{ width: `${model.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const quickActionLinks = [
  {
    title: "Upload New Video",
    icon: <FiUpload className="text-xl text-blue-600" />,
  },
  {
    title: "View Analytics",
    icon: <SiGoogleanalytics className="text-xl text-blue-600" />,
  },
  {
    title: "Player Stats",
    icon: <IoIosPeople className="text-xl text-blue-600" />,
  },
  {
    title: "Generate Highlights ",
    icon: <PiVideo className="text-xl text-blue-600" />,
  },
]

const QuickActions = () => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900 shadow-sm">
      <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
        Quick Actions
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Get started with common tasks
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActionLinks.map((action, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition cursor-pointer text-center"
          >
            {/* Icon on top */}
            <div>{action.icon}</div>

            {/* Title below */}
            <div className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
              {action.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
const activity = [
  {
    title: "Match vs Arsenal analyzed",
    status: "completed",
    time: "2 hours ago",
  },
  {
    title: "Goal highlights generated",
    status: "activity",
    time: "3 hours ago",
  },
  {
    title: "Defensive Pattern AI updated",
    status: "ready",
    time: "3 hours ago",
  },
  {
    title: "Player performance report",
    status: "viewed",
    time: "2 hours ago",
  },
]

const statusColors = new Map<string, string>([
  [
    "completed",
    "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200",
  ],
  ["activity", "bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200"],
  [
    "ready",
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200",
  ],
  ["viewed", "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"],
])

// Usage:


const RecentActivity = () => {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900 shadow-sm">
      <h2 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">
        Recent Activity
      </h2>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
        Latest updates from your sports analytics
      </p>

      <div className="space-y-4">
        {activity.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border border-neutral-200 dark:border-neutral-700 p-4 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <div>
              <p className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
                {item.title}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {item.time}
              </p>
            </div>
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${
                statusColors.get(item.status)
              }`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}


export default Dashboard
