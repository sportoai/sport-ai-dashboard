import React, { useState } from "react"
import { FileUpload } from "@/Components/ui/file-upload"
import { BarChart3, UserCheck, Sparkles } from "lucide-react"

const Upload = () => {
  const [files, setFiles] = useState<File[]>([])

  const handleFileUpload = (files: File[]) => {
    setFiles(files)
    console.log(files)
  }

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md">
      <h1 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
        Upload Match Video
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Upload your match footage for AI-powered analysis
      </p>

      <FileUpload onChange={handleFileUpload} />

      <div className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Match Title
          </label>
          <input
            type="text"
            placeholder="Match title"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Match Date
          </label>
          <input
            type="date"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            League / Competition
          </label>
          <input
            type="text"
            placeholder="e.g. Premier League"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Additional Notes
          </label>
          <input
            type="text"
            placeholder="Any extra details..."
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-neutral-900 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <AnalysisConfiguration />
      </div>
    </div>
  )
}

export default Upload
const Analysis = [
  {
    name: "Team Performance Analysis",
    description: "Analyze team tactics, formations, and overall performance",
    time: "15-20 minutes",
    icon: <BarChart3 className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Player Trend Analysis",
    description: "Track individual player statistics and performance trends",
    time: "10-15 minutes",
    icon: <UserCheck className="w-6 h-6 text-green-500" />,
  },
  {
    name: "Highlight Generation",
    description: "Auto-generate highlights for goals, assists, and key moments",
    time: "5-10 minutes",
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
  },
]

const AnalysisConfiguration = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Analysis Configuration
      </h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Choose the type of analysis to perform on your video
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {Analysis.map((item, index) => (
          <div
            key={index}
            className="p-5 border rounded-2xl bg-white dark:bg-neutral-900 shadow-sm border-neutral-200 dark:border-neutral-800 hover:shadow-md transition"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {item.name}
              </h2>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {item.description}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500">
              Estimated Time: {item.time}
            </p>
          </div>
        ))}
      </div>
      <div>
        <h2>Seleceted Analysis types</h2>

        <p>Team Performance Analysis</p>
      </div>
      <div>Start Upload and Analysis</div>
    </div>
  )
}
