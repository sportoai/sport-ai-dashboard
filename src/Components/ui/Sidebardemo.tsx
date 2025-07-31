import { useState } from "react"
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
    <div className="flex h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4 overflow-hidden">
      <div className="flex flex-1 flex-col gap-4 rounded-3xl border border-gray-800 bg-gradient-to-br from-black via-gray-900 to-black p-4 md:p-6 shadow-2xl backdrop-blur-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {/* Enhanced Header Section */}
        <div className="flex items-center justify-between flex-shrink-0">
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              SportoAI Dashboard
            </h1>
            <p className="text-gray-400 text-sm md:text-lg">
              Advanced sports analytics powered by AI
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-gray-400">
                  Live Analysis
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-xs md:text-sm text-gray-400">
                  Real-time Data
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <div className="relative">
              <IoIosNotifications className="text-xl md:text-2xl text-gray-400 cursor-pointer hover:text-blue-500 transition-all duration-300" />
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse" />
            </div>
            <button className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-2 md:px-6 md:py-3 text-white text-sm md:text-base hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105">
              Upload Video
            </button>
            <button className="hidden md:block rounded-xl border-2 border-blue-600 px-6 py-3 text-blue-400 hover:bg-blue-600/10 transition-all duration-300 backdrop-blur-sm">
              Import Data
            </button>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="flex-shrink-0">
          <HoverEffect items={projects} />
        </div>

        {/* Main content area with proper layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 auto-rows-max">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <QuickActions />
          </div>

          {/* AI Model Training */}
          <div className="lg:col-span-1">
            <ModelTrainingProgress />
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2 xl:col-span-1">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  )
}

const ModelTrainingProgress = () => {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 shadow-xl backdrop-blur-sm min-h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-4 md:mb-6 flex-shrink-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            AI Model Training
          </h2>
          <p className="text-gray-400 text-sm">
            Real-time training progress and analytics
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs md:text-sm text-green-400 font-medium">
            Active
          </span>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {models.map(
          (model: import("./dashboard-constants").Model, index: number) => (
            <div key={index} className="group relative">
              <div className="flex justify-between items-center mb-2 md:mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-white font-medium block text-sm md:text-base">
                      {model.title}
                    </span>
                    <div className="flex items-center space-x-1">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-xs text-blue-400 font-medium">
                        Training
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 mt-1 block">
                    ETA: {model.eta || "Calculating..."} • Epoch{" "}
                    {Math.floor(Math.random() * 100) + 1}/150
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-base md:text-lg font-bold text-white">
                    {model.percentage}%
                  </span>
                  <div
                    className={`text-xs px-2 py-1 rounded-full mt-1 ${
                      model.status === "completed"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : model.status === "training"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                    }`}
                  >
                    {model.status === "completed"
                      ? "✓ Complete"
                      : model.status === "training"
                      ? "◉ Training"
                      : "⏸ Paused"}
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full bg-gray-800 rounded-full h-2 md:h-3 overflow-hidden border border-gray-700">
                  <div
                    className={`h-2 md:h-3 rounded-full transition-all duration-1000 ease-out relative ${
                      model.percentage >= 90
                        ? "bg-gradient-to-r from-green-500 to-emerald-500"
                        : model.percentage >= 70
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                        : "bg-gradient-to-r from-purple-500 to-pink-500"
                    }`}
                    style={{ width: `${model.percentage}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  </div>
                </div>
                {model.percentage > 0 && (
                  <div className="absolute right-0 top-0 h-2 md:h-3 w-1 bg-white/50 rounded-r-full" />
                )}
              </div>

              {/* Enhanced model details */}
              <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                  <div className="text-gray-400">Loss</div>
                  <div className="text-white font-medium">
                    {(Math.random() * 0.5).toFixed(3)}
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                  <div className="text-gray-400">Accuracy</div>
                  <div className="text-white font-medium">
                    {(85 + Math.random() * 10).toFixed(1)}%
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-2 border border-gray-700">
                  <div className="text-gray-400">Speed</div>
                  <div className="text-white font-medium">
                    {(Math.random() * 2 + 1).toFixed(1)}s/it
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      <div className="mt-4 md:mt-6 space-y-3 flex-shrink-0">
        {/* GPU Usage */}
        <div className="p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-400">Total GPU Usage</span>
            <span className="text-white font-medium">73.2%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
              style={{ width: "73.2%" }}
            />
          </div>
        </div>

        {/* Training Queue */}
        <div className="p-3 md:p-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-700/50">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium text-sm">
                Training Queue
              </div>
              <div className="text-blue-400 text-xs">3 models pending</div>
            </div>
            <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-white text-xs transition-colors duration-300">
              Manage Queue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const QuickActions = () => {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 shadow-xl backdrop-blur-sm min-h-[600px] flex flex-col">
      <div className="mb-4 md:mb-6 flex-shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
          Quick Actions
        </h2>
        <p className="text-gray-400 text-sm">
          Streamline your workflow with one-click actions
        </p>
      </div>

      {/* Enhanced Grid Layout - More compact */}
      <div className="grid grid-cols-2 gap-2 md:gap-3 flex-1">
        {quickActionLinks.map(
          (
            action: import("./dashboard-constants").QuickActionLink,
            index: number
          ) => (
            <div
              key={index}
              className={`group flex flex-col items-center justify-center gap-2 rounded-lg border p-3 md:p-4 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg ${
                action.color || "border-gray-700 hover:bg-gray-800/50"
              }`}
            >
              {/* Compact Icon */}
              <div className="relative">
                <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                  <div className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300">
                    {action.icon}
                  </div>
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Compact Text */}
              <div className="text-center">
                <div className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300 text-xs md:text-sm leading-tight">
                  {action.title}
                </div>
                {action.description && (
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300 mt-1 hidden md:block line-clamp-2">
                    {action.description}
                  </div>
                )}
              </div>

              {/* Subtle hover effect indicator */}
              <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-8 transition-all duration-300 rounded-full" />
            </div>
          )
        )}
      </div>

      {/* Recent Actions History */}
      <div className="mt-4 space-y-2 flex-shrink-0">
        <div className="text-sm font-medium text-gray-300 mb-2">
          Recent Actions
        </div>
        <div className="space-y-1">
          {[
            { action: "Video uploaded", time: "2 min ago", status: "success" },
            { action: "Model trained", time: "5 min ago", status: "success" },
            { action: "Data exported", time: "12 min ago", status: "success" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 bg-gray-800/30 rounded-lg border border-gray-700/50"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`w-1.5 h-1.5 rounded-full ${
                    item.status === "success" ? "bg-green-500" : "bg-blue-500"
                  }`}
                />
                <span className="text-xs text-gray-300">{item.action}</span>
              </div>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-4 p-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-xl border border-gray-700 flex-shrink-0">
        <div className="flex justify-between items-center">
          <div className="text-center">
            <div className="text-lg font-bold text-white">47</div>
            <div className="text-xs text-gray-400">Actions Today</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-400">12</div>
            <div className="text-xs text-gray-400">Active Tasks</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-green-400">98%</div>
            <div className="text-xs text-gray-400">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RecentActivity = () => {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 shadow-xl backdrop-blur-sm min-h-[600px] flex flex-col">
      <div className="flex items-center justify-between mb-4 md:mb-6 flex-shrink-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Recent Activity
          </h2>
          <p className="text-gray-400 text-sm">
            Latest updates from your analytics pipeline
          </p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors duration-300 text-xs md:text-sm font-medium px-3 py-1 rounded-lg border border-gray-700 hover:border-gray-600">
          View All →
        </button>
      </div>

      {/* Activity Feed */}
      <div className="space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 pr-1">
        {activity.map(
          (
            item: import("./dashboard-constants").ActivityItem,
            index: number
          ) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/50 p-3 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-md backdrop-blur-sm"
            >
              <div className="flex items-start space-x-3">
                {/* Status icon */}
                <div className="flex-shrink-0 mt-1">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      item.status === "completed"
                        ? "bg-green-500"
                        : item.status === "processing"
                        ? "bg-blue-500 animate-pulse"
                        : item.status === "failed"
                        ? "bg-red-500"
                        : "bg-gray-500"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300 text-sm leading-tight truncate">
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mt-1 line-clamp-2">
                          {item.description}
                        </p>
                      )}
                    </div>

                    {/* Status badge */}
                    <span
                      className={`text-xs font-medium px-2 py-1 rounded-full border flex-shrink-0 ml-2 ${statusColors.get(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Progress and time */}
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-gray-500">{item.time}</p>
                    {item.progress !== undefined && (
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              item.progress === 100
                                ? "bg-green-500"
                                : item.progress > 0
                                ? "bg-blue-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 font-medium w-8 text-right">
                          {item.progress}%
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 to-purple-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </div>
          )
        )}
      </div>

      {/* Activity Filters */}
      <div className="mt-4 flex space-x-2 flex-shrink-0">
        {["All", "Processing", "Completed", "Failed"].map((filter) => (
          <button
            key={filter}
            className={`text-xs px-3 py-1 rounded-lg border transition-colors duration-300 ${
              filter === "All"
                ? "bg-blue-600/20 border-blue-600/50 text-blue-400"
                : "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Summary stats - More compact */}
      <div className="mt-4 grid grid-cols-3 gap-2 flex-shrink-0">
        <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="text-sm font-bold text-green-400">24</div>
          <div className="text-xs text-gray-400">Done</div>
        </div>
        <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="text-sm font-bold text-blue-400">8</div>
          <div className="text-xs text-gray-400">Active</div>
        </div>
        <div className="text-center p-2 bg-gray-800/30 rounded-lg border border-gray-700">
          <div className="text-sm font-bold text-yellow-400">3</div>
          <div className="text-xs text-gray-400">Queue</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
