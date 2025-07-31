// Dashboard constants and types for Sidebardemo
import React from 'react'
import { FiUpload } from 'react-icons/fi'
import { SiGoogleanalytics } from 'react-icons/si'
import { IoIosPeople } from 'react-icons/io'
import { PiVideo } from 'react-icons/pi'

export interface Project {
  title: string
  description: string
  link: string
  icon?: string
  trend?: string
  color?: string
}

export const projects: Project[] = [
  {
    title: 'Total Videos Analyzed',
    description: '1,247',
    link: 'https://stripe.com',
    icon: '🎥',
    trend: '+12.5%',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'AI Models Active',
    description: '27',
    link: 'https://netflix.com',
    icon: '🤖',
    trend: '+8.3%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Team Performance',
    description: '87%',
    link: 'https://meta.com',
    icon: '⚡',
    trend: '+15.2%',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Match Highlights',
    description: '456',
    link: 'https://amazon.com',
    icon: '🏆',
    trend: '+22.1%',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Player Analytics',
    description: '892',
    link: 'https://example.com',
    icon: '👥',
    trend: '+9.7%',
    color: 'from-indigo-500 to-blue-500'
  },
  {
    title: 'Live Streaming',
    description: '12',
    link: 'https://example.com',
    icon: '📡',
    trend: '+5.4%',
    color: 'from-pink-500 to-rose-500'
  },
]

export interface Model {
  title: string
  percentage: number
  status?: 'training' | 'completed' | 'pending'
  eta?: string
}

export const models: Model[] = [
  {
    title: 'Defensive Pattern Recognition',
    percentage: 75,
    status: 'training',
    eta: '2h 15m'
  },
  {
    title: 'Player Movement Analysis',
    percentage: 60,
    status: 'training',
    eta: '4h 30m'
  },
  {
    title: 'Goal Prediction AI',
    percentage: 90,
    status: 'completed',
    eta: 'Complete'
  },
  {
    title: 'Formation Recognition',
    percentage: 55,
    status: 'training',
    eta: '6h 12m'
  },
  {
    title: 'Offensive Strategy Optimization',
    percentage: 85,
    status: 'training',
    eta: '1h 45m'
  },
]

export interface QuickActionLink {
  title: string
  icon: React.ReactElement
  description?: string
  color?: string
}

export const quickActionLinks: QuickActionLink[] = [
  {
    title: 'Upload New Video',
    icon: React.createElement(FiUpload, { className: "text-xl text-blue-400" }),
    description: 'Analyze match footage',
    color: 'border-blue-500/20 hover:bg-blue-500/10'
  },
  {
    title: 'View Analytics',
    icon: React.createElement(SiGoogleanalytics, { className: "text-xl text-green-400" }),
    description: 'Performance insights',
    color: 'border-green-500/20 hover:bg-green-500/10'
  },
  {
    title: 'Player Stats',
    icon: React.createElement(IoIosPeople, { className: "text-xl text-purple-400" }),
    description: 'Individual metrics',
    color: 'border-purple-500/20 hover:bg-purple-500/10'
  },
  {
    title: 'Generate Highlights',
    icon: React.createElement(PiVideo, { className: "text-xl text-orange-400" }),
    description: 'Auto video clips',
    color: 'border-orange-500/20 hover:bg-orange-500/10'
  },
]

export interface ActivityItem {
  title: string
  status: 'completed' | 'activity' | 'ready' | 'viewed' | 'processing' | 'failed'
  time: string
  description?: string
  progress?: number
}

export const activity: ActivityItem[] = [
  {
    title: 'Chelsea vs Arsenal Match Analysis',
    status: 'completed',
    time: '2 hours ago',
    description: 'Full tactical breakdown completed',
    progress: 100
  },
  {
    title: 'Player Heatmap Generation',
    status: 'processing',
    time: '15 minutes ago',
    description: 'Analyzing player movement patterns',
    progress: 65
  },
  {
    title: 'Goal Highlights Compilation',
    status: 'ready',
    time: '1 hour ago',
    description: 'Ready for review and export',
    progress: 100
  },
  {
    title: 'Defensive AI Model Training',
    status: 'activity',
    time: '30 minutes ago',
    description: 'Learning from new match data',
    progress: 78
  },
  {
    title: 'Weekly Performance Report',
    status: 'viewed',
    time: '6 hours ago',
    description: 'Team insights and recommendations',
    progress: 100
  },
  {
    title: 'Video Upload Processing',
    status: 'failed',
    time: '4 hours ago',
    description: 'Network timeout during upload',
    progress: 0
  },
]

export const statusColors = new Map<string, string>([
  ['completed', 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'],
  ['processing', 'bg-blue-500/20 text-blue-400 border-blue-500/30'],
  ['activity', 'bg-purple-500/20 text-purple-400 border-purple-500/30'],
  ['ready', 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'],
  ['viewed', 'bg-gray-500/20 text-gray-400 border-gray-500/30'],
  ['failed', 'bg-red-500/20 text-red-400 border-red-500/30'],
]) 