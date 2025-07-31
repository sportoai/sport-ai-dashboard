import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"

import { useState } from "react"

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    icon?: string
    trend?: string
    color?: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 py-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-black/80 block rounded-3xl border border-gray-700"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.2, delay: 0.1 },
                }}
              />
            )}
          </AnimatePresence>
          <Card item={item}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
  item,
}: {
  className?: string
  children: React.ReactNode
  item?: {
    title: string
    description: string
    link: string
    icon?: string
    trend?: string
    color?: string
  }
}) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-6 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 group-hover:border-gray-700 relative z-20 shadow-xl backdrop-blur-sm",
        className
      )}
    >
      <div className="relative z-50">
        {item && (
          <div className="space-y-4">
            {/* Header with icon and trend */}
            <div className="flex items-center justify-between">
              {item.icon && <div className="text-3xl">{item.icon}</div>}
              {item.trend && (
                <div className="flex items-center space-x-1 text-green-400 text-sm font-medium">
                  <span>↗</span>
                  <span>{item.trend}</span>
                </div>
              )}
            </div>

            {/* Main content */}
            <div className="space-y-3">
              <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors duration-300">
                {item.title}
              </h3>
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {item.description}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${
                  item.color || "from-blue-500 to-purple-600"
                } transition-all duration-1000`}
                style={{ width: "70%" }}
              />
            </div>
          </div>
        )}
        {!item && <div className="p-4">{children}</div>}
      </div>

      {/* Ambient glow effect */}
      <div
        className={`absolute inset-0 opacity-20 bg-gradient-to-r ${
          item?.color || "from-blue-500 to-purple-600"
        } blur-xl group-hover:opacity-30 transition-opacity duration-300`}
      />
    </div>
  )
}
export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  )
}
export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
