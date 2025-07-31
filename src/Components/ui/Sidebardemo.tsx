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

import {
  projects,
  models,
  quickActionLinks,
  activity,
  statusColors,
} from "./dashboard-constants"

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
        "flex h-screen w-screen flex-row overflow-hidden bg-[#000000]"
        // removed dark:bg-neutral-800, enforce black
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

const Dashboard = () => {
  return (
    <div className="flex min-h-screen w-full bg-[#101820] p-4">
      <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-[#2f2f2f] bg-[#000000] p-4 md:p-10 shadow-lg">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-[#f5f5f5]">Dashboard</h1>
            <p className="text-[#b0b0b0]">
              Analyze your data and gain insights.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosNotifications className="text-2xl text-[#b0b0b0] cursor-pointer hover:text-blue-500 transition" />
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
              Upload
            </button>
            <button className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-[#101820] transition">
              Import Data
            </button>
          </div>
        </div>
        {/* Hover Effect Projects Section */}
        <div>
          <HoverEffect items={projects} />
        </div>
        <div className="flex">
          <QuickActions />
          <ModelTrainingProgress />
        </div>
        <RecentActivity />
      </div>
    </div>
  )
}

const ModelTrainingProgress = () => {
  return (
    <div className="rounded-xl border border-[#2f2f2f] bg-[#101820] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#f5f5f5] mb-2">
        Model Training Progress
      </h2>
      <p className="text-sm text-[#b0b0b0] mb-6">
        Current AI model training status
      </p>

      <div className="flex flex-col gap-5">
        {models.map(
          (model: import("./dashboard-constants").Model, index: number) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-[#f5f5f5]">
                  {model.title}
                </span>
                <span className="text-sm font-medium text-[#f5f5f5]">
                  {model.percentage}%
                </span>
              </div>
              <div className="w-full bg-[#2f2f2f] rounded-full h-3">
                <div
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${model.percentage}%` }}
                ></div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

const QuickActions = () => {
  return (
    <div className="rounded-xl border border-[#2f2f2f] bg-[#101820] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#f5f5f5] mb-2">
        Quick Actions
      </h2>
      <p className="text-sm text-[#b0b0b0] mb-6">
        Get started with common tasks
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActionLinks.map(
          (
            action: import("./dashboard-constants").QuickActionLink,
            index: number
          ) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 rounded-lg border border-[#2f2f2f] p-6 hover:bg-[#2f2f2f] transition cursor-pointer text-center"
            >
              {/* Icon on top */}
              <div>{action.icon}</div>

              {/* Title below */}
              <div className="text-sm font-medium text-[#f5f5f5]">
                {action.title}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}

const RecentActivity = () => {
  return (
    <div className="rounded-xl border border-[#2f2f2f] bg-[#101820] p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#f5f5f5] mb-2">
        Recent Activity
      </h2>
      <p className="text-sm text-[#b0b0b0] mb-6">
        Latest updates from your sports analytics
      </p>

      <div className="space-y-4">
        {activity.map(
          (
            item: import("./dashboard-constants").ActivityItem,
            index: number
          ) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-[#2f2f2f] p-4 hover:bg-[#2f2f2f] transition"
            >
              <div>
                <p className="text-sm font-medium text-[#f5f5f5]">
                  {item.title}
                </p>
                <p className="text-xs text-[#b0b0b0]">{item.time}</p>
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full ${statusColors.get(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  )
}


export default Dashboard
