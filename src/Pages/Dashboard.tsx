import { BackgroundBeams } from "../Components/ui/background-beams"
import { SidebarDemo } from "@/Components/ui/Sidebardemo"

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced Background with subtle patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.05)_50%,transparent_75%)] bg-[length:60px_60px]" />

      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-1000" />

      <BackgroundBeams />

      {/* Main Dashboard Content */}
      <div className="relative z-10">
        <SidebarDemo />
      </div>
    </div>
  )
}

export default Dashboard
