// App.jsx or UserProfilePage.jsx
import React from "react"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

const Button = ({ children }) => (
  <button className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm hover:bg-gray-700 transition">
    {children}
  </button>
)

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-gray-900 text-white p-4 rounded-xl shadow-md ${className}`}
  >
    {children}
  </div>
)

const Tabs = ({ tabs, activeTab, setActiveTab }) => (
  <div className="flex bg-gray-800 rounded-xl overflow-hidden">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`w-full px-4 py-2 text-sm font-medium ${
          activeTab === tab
            ? "bg-gray-700 text-white"
            : "text-gray-400 hover:bg-gray-700"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
)

const ProfileHeader = () => (
  <div className="flex flex-col items-center gap-4 p-6 bg-gray-900 rounded-xl text-white">
    <img
      src="https://res.cloudinary.com/dw3pz7ahl/image/upload/v1731394713/c3j6dh9vobo6ahjz21ez.png"
      alt="Profile"
      className="w-24 h-24 rounded-full border-4 border-gray-700 shadow"
    />
    <div className="text-center">
      <h1 className="text-2xl font-bold">Carlos Martinez</h1>
      <p className="text-gray-400">Senior Football Analyst & AI Specialist</p>
      <div className="mt-2 flex gap-2 justify-center">
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          Analyst
        </span>
        <span className="bg-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          AI Developer
        </span>
      </div>
    </div>
    <div className="text-center space-y-1">
      <p className="flex items-center justify-center text-sm text-gray-400">
        <Mail className="w-4 h-4 mr-2" /> carlos.martinez@sportoai.com
      </p>
      <p className="flex items-center justify-center text-sm text-gray-400">
        <Phone className="w-4 h-4 mr-2" /> +1 (555) 123-4567
      </p>
      <p className="flex items-center justify-center text-sm text-gray-400">
        <MapPin className="w-4 h-4 mr-2" /> Barcelona, Spain
      </p>
    </div>
    <div className="flex gap-2 mt-3">
      <Button>
        <ExternalLink className="w-4 h-4 inline mr-1" /> LinkedIn
      </Button>
      <Button>
        <ExternalLink className="w-4 h-4 inline mr-1" /> Twitter
      </Button>
      <Button>
        <ExternalLink className="w-4 h-4 inline mr-1" /> YouTube
      </Button>
    </div>
  </div>
)

const AboutSection = () => (
  <Card>
    <h2 className="text-lg font-semibold mb-2">About Me</h2>
    <p className="text-sm text-gray-300">
      Passionate football analyst with 8+ years of experience in sports data
      analytics and AI model development. Specialized in tactical analysis,
      player performance evaluation, and predictive modeling for professional
      football teams.
    </p>
  </Card>
)

const AchievementsSection = () => (
  <Card>
    <h2 className="text-lg font-semibold mb-4">Achievements</h2>
    <div className="grid gap-3">
      <div className="bg-gray-800 p-3 rounded-lg shadow-sm">
        <strong className="text-white">⭐ Top Analyst 2024</strong>
        <br />
        <span className="text-sm text-gray-400">
          Recognized for outstanding performance analysis
        </span>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg shadow-sm">
        <strong className="text-white">⭐ Model Developer</strong>
        <br />
        <span className="text-sm text-gray-400">
          Created 5+ AI models with 90%+ accuracy
        </span>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg shadow-sm">
        <strong className="text-white">⭐ Team Champion</strong>
        <br />
        <span className="text-sm text-gray-400">
          Helped team achieve 15-match winning streak
        </span>
      </div>
      <div className="bg-gray-800 p-3 rounded-lg shadow-sm">
        <strong className="text-white">⭐ Innovation Award</strong>
        <br />
        <span className="text-sm text-gray-400">
          Pioneered new defensive pattern recognition
        </span>
      </div>
    </div>
  </Card>
)

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("Overview")
  const tabs = ["Overview", "Skills", "Portfolio", "Settings"]

  return (
    <div className="min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <ProfileHeader />
          </div>
          <div className="md:w-2/3 space-y-4">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {activeTab === "Overview" && (
              <>
                <AboutSection />
                <AchievementsSection />
              </>
            )}
            {activeTab !== "Overview" && (
              <Card>
                <p className="text-sm text-gray-400">
                  {activeTab} section coming soon...
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
