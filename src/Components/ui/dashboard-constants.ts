// Dashboard constants and types for Sidebardemo
import { FiUpload } from 'react-icons/fi'
import { SiGoogleanalytics } from 'react-icons/si'
import { IoIosPeople } from 'react-icons/io'
import { PiVideo } from 'react-icons/pi'

export interface Project {
  title: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    title: 'Total Video Analyzed',
    description: '1,247',
    link: 'https://stripe.com',
  },
  {
    title: 'AI Models Active',
    description: '27',
    link: 'https://netflix.com',
  },
  {
    title: 'Team Performance',
    description: '87%',
    link: 'https://meta.com',
  },
  {
    title: 'Match Highlights',
    description: '456',
    link: 'https://amazon.com',
  },
]

export interface Model {
  title: string
  percentage: number
}

export const models: Model[] = [
  {
    title: 'Defensive Pattern Recognition',
    percentage: 75,
  },
  {
    title: 'Player Movement Analysis',
    percentage: 60,
  },
  {
    title: 'Defensive Pattern Recognition',
    percentage: 90,
  },
  {
    title: 'Player Movement Analysis',
    percentage: 55,
  },
  {
    title: 'Offensive Strategy Optimization',
    percentage: 90,
  },
]

export interface QuickActionLink {
  title: string
  icon?: JSX.Element
}

export const quickActionLinks: QuickActionLink[] = [
  {
    title: 'Upload New Video',
    // icon: <FiUpload className="text-xl text-blue-600" />,
  },
  {
    title: 'View Analytics',
    // icon: <SiGoogleanalytics className="text-xl text-blue-600" />,
  },
  {
    title: 'Player Stats',
    // icon: <IoIosPeople className="text-xl text-blue-600" />,
  },
  {
    title: 'Generate Highlights ',
    // icon: <PiVideo className="text-xl text-blue-600" />,
  },
]

export interface ActivityItem {
  title: string
  status: 'completed' | 'activity' | 'ready' | 'viewed'
  time: string
}

export const activity: ActivityItem[] = [
  {
    title: 'Match vs Arsenal analyzed',
    status: 'completed',
    time: '2 hours ago',
  },
  {
    title: 'Goal highlights generated',
    status: 'activity',
    time: '3 hours ago',
  },
  {
    title: 'Defensive Pattern AI updated',
    status: 'ready',
    time: '3 hours ago',
  },
  {
    title: 'Player performance report',
    status: 'viewed',
    time: '2 hours ago',
  },
]

export const statusColors = new Map<string, string>([
  ['completed', 'bg-green-900 text-green-300'],
  ['activity', 'bg-blue-900 text-blue-300'],
  ['ready', 'bg-yellow-900 text-yellow-300'],
  ['viewed', 'bg-[#2f2f2f] text-[#b0b0b0]'],
]) 