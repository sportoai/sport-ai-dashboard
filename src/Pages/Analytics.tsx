import { Button } from "@/Components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import { Badge } from "@/Components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs"
import { Progress } from "@/Components/ui/progress"
import { Layout } from "@/Components/layout/layout"
import {
  BarChart3,
  TrendingUp,
  Users,
  Target,
  Activity,
  Trophy,
  Clock,
  Filter,
  Download,
  Share,
  Maximize2,
} from "lucide-react"

export default function Analytics() {
  const teamStats = [
    {
      team: "Arsenal",
      matches: 38,
      wins: 28,
      draws: 5,
      losses: 5,
      goals: 91,
      points: 89,
      logo: "🔴",
    },
    {
      team: "Manchester City",
      matches: 38,
      wins: 26,
      draws: 7,
      losses: 5,
      goals: 89,
      points: 85,
      logo: "🔵",
    },
    {
      team: "Liverpool",
      matches: 38,
      wins: 24,
      draws: 10,
      losses: 4,
      goals: 86,
      points: 82,
      logo: "🔴",
    },
    {
      team: "Chelsea",
      matches: 38,
      wins: 21,
      draws: 8,
      losses: 9,
      goals: 77,
      points: 71,
      logo: "🔵",
    },
    {
      team: "Newcastle",
      matches: 38,
      wins: 19,
      draws: 14,
      losses: 5,
      goals: 68,
      points: 71,
      logo: "⚫",
    },
  ]

  const playerMetrics = [
    {
      name: "Kevin De Bruyne",
      position: "Midfielder",
      goals: 15,
      assists: 27,
      rating: 8.9,
      team: "Man City",
    },
    {
      name: "Erling Haaland",
      position: "Striker",
      goals: 36,
      assists: 8,
      rating: 8.7,
      team: "Man City",
    },
    {
      name: "Bukayo Saka",
      position: "Winger",
      goals: 14,
      assists: 13,
      rating: 8.5,
      team: "Arsenal",
    },
    {
      name: "Mohamed Salah",
      position: "Winger",
      goals: 19,
      assists: 12,
      rating: 8.4,
      team: "Liverpool",
    },
    {
      name: "Bruno Fernandes",
      position: "Midfielder",
      goals: 8,
      assists: 16,
      rating: 8.2,
      team: "Man United",
    },
  ]

  const performanceKPIs = [
    { metric: "Pass Accuracy", value: 87.2, change: "+2.1%", trend: "up" },
    { metric: "Shot Conversion", value: 15.8, change: "+1.3%", trend: "up" },
    {
      metric: "Defensive Actions",
      value: 24.6,
      change: "-0.8%",
      trend: "down",
    },
    { metric: "Ball Possession", value: 58.9, change: "+3.2%", trend: "up" },
    { metric: "Distance Covered", value: 105.3, change: "+0.5%", trend: "up" },
    { metric: "Sprint Speed", value: 28.4, change: "-1.1%", trend: "down" },
  ]

  const matchAnalysis = [
    {
      match: "Arsenal vs Chelsea",
      date: "Dec 15, 2024",
      score: "2-1",
      highlights: ["Goal - 23'", "Goal - 67'", "Red Card - 78'"],
      insights: "Strong defensive performance in second half",
    },
    {
      match: "Man City vs Liverpool",
      date: "Dec 12, 2024",
      score: "3-2",
      highlights: ["Goal - 15'", "Goal - 34'", "Goal - 89'"],
      insights: "High-intensity pressing led to turnovers",
    },
    {
      match: "Chelsea vs Newcastle",
      date: "Dec 10, 2024",
      score: "1-0",
      highlights: ["Goal - 56'", "Penalty Save - 72'"],
      insights: "Tactical substitutions changed momentum",
    },
  ]

  const seasons = ["2024-25", "2023-24", "2022-23", "2021-22"]
  const leagues = ["Premier League", "Champions League", "FA Cup", "EFL Cup"]

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 py-8">
          {/* Header with Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Analytics Dashboard
              </h1>
              <p className="text-gray-400 text-lg">
                AI-powered sports performance insights
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                {seasons.map((season) => (
                  <option key={season} value={season} className="bg-gray-800">
                    {season}
                  </option>
                ))}
              </select>
              <select className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                {leagues.map((league) => (
                  <option key={league} value={league} className="bg-gray-800">
                    {league}
                  </option>
                ))}
              </select>
              <Button
                variant="outline"
                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700 transition-all"
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>

          {/* Analytics Hero Section */}
          <Card className="mb-8 overflow-hidden border-gray-800 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-2xl">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-transparent" />
              <div className="relative px-8 py-12">
                <div className="max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Next-Gen Sports Analytics
                  </h2>
                  <p className="text-gray-300 text-lg mb-6">
                    Real-time insights powered by advanced machine learning
                    algorithms
                  </p>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-300">Live Data</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="h-4 w-4 text-blue-400" />
                      <span className="text-sm text-gray-300">AI Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Tabs defaultValue="team-stats" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900 border border-gray-800 rounded-xl p-1">
              <TabsTrigger
                value="team-stats"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400 transition-all"
              >
                Team Stats
              </TabsTrigger>
              <TabsTrigger
                value="player-stats"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400 transition-all"
              >
                Player Stats
              </TabsTrigger>
              <TabsTrigger
                value="performance"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400 transition-all"
              >
                Performance
              </TabsTrigger>
              <TabsTrigger
                value="matches"
                className="data-[state=active]:bg-gray-800 data-[state=active]:text-white text-gray-400 transition-all"
              >
                Match Analysis
              </TabsTrigger>
            </TabsList>

            {/* Team Stats Tab */}
            <TabsContent value="team-stats" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Trophy className="h-5 w-5 text-yellow-500" />
                    <span>Premier League Table</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Current season standings with detailed statistics
                  </CardDescription>
                  <div className="flex space-x-2 mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                    >
                      <Share className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800 border-b border-gray-700">
                        <tr>
                          <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                            Team
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            MP
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            W
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            D
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            L
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            GF
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            Pts
                          </th>
                          <th className="text-center py-4 px-4 text-gray-300 font-semibold">
                            Form
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-gray-900">
                        {teamStats.map((team, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800 hover:bg-gray-800/50 transition-all duration-200"
                          >
                            <td className="py-4 px-6">
                              <div className="flex items-center space-x-4">
                                <div
                                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                                    index === 0
                                      ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                                      : index < 4
                                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                                      : index < 6
                                      ? "bg-gradient-to-r from-orange-500 to-orange-600"
                                      : "bg-gradient-to-r from-gray-600 to-gray-700"
                                  }`}
                                >
                                  {index + 1}
                                </div>
                                <span className="text-2xl">{team.logo}</span>
                                <span className="font-semibold text-white">
                                  {team.team}
                                </span>
                              </div>
                            </td>
                            <td className="text-center py-4 px-4 text-gray-300">
                              {team.matches}
                            </td>
                            <td className="text-center py-4 px-4 text-green-400 font-semibold">
                              {team.wins}
                            </td>
                            <td className="text-center py-4 px-4 text-yellow-400 font-semibold">
                              {team.draws}
                            </td>
                            <td className="text-center py-4 px-4 text-red-400 font-semibold">
                              {team.losses}
                            </td>
                            <td className="text-center py-4 px-4 text-gray-300 font-semibold">
                              {team.goals}
                            </td>
                            <td className="text-center py-4 px-4 font-bold text-white text-lg">
                              {team.points}
                            </td>
                            <td className="text-center py-4 px-4">
                              <div className="flex justify-center space-x-1">
                                {["W", "W", "D", "W", "L"].map((result, i) => (
                                  <div
                                    key={i}
                                    className={`w-6 h-6 rounded-full text-xs flex items-center justify-center text-white font-bold shadow-lg ${
                                      result === "W"
                                        ? "bg-gradient-to-r from-green-500 to-green-600"
                                        : result === "D"
                                        ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
                                        : "bg-gradient-to-r from-red-500 to-red-600"
                                    }`}
                                  >
                                    {result}
                                  </div>
                                ))}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Player Stats Tab */}
            <TabsContent value="player-stats" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span>Elite Player Performance</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Individual player statistics and advanced metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {playerMetrics.map((player, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:scale-105"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge
                              variant="outline"
                              className="bg-blue-500/20 text-blue-400 border-blue-500/30"
                            >
                              {player.position}
                            </Badge>
                            <div className="text-right">
                              <div className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                                {player.rating}
                              </div>
                              <div className="text-xs text-gray-400">
                                Rating
                              </div>
                            </div>
                          </div>
                          <h3 className="font-bold text-xl mb-1 text-white">
                            {player.name}
                          </h3>
                          <p className="text-sm text-gray-400 mb-4 font-medium">
                            {player.team}
                          </p>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                              <div className="text-2xl font-bold text-green-400">
                                {player.goals}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                Goals
                              </div>
                            </div>
                            <div className="text-center p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                              <div className="text-2xl font-bold text-blue-400">
                                {player.assists}
                              </div>
                              <div className="text-xs text-gray-400 mt-1">
                                Assists
                              </div>
                            </div>
                          </div>
                          <div className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000"
                              style={{
                                width: `${(player.rating / 10) * 100}%`,
                              }}
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Performance Tab */}
            <TabsContent value="performance" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Activity className="h-5 w-5 text-purple-500" />
                    <span>Performance Metrics</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Advanced KPIs with trend analysis and predictive insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {performanceKPIs.map((kpi, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-br from-gray-800 via-gray-900 to-black border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h4 className="font-semibold text-white">
                              {kpi.metric}
                            </h4>
                            <div
                              className={`flex items-center space-x-1 text-sm px-2 py-1 rounded-full ${
                                kpi.trend === "up"
                                  ? "text-green-400 bg-green-500/20"
                                  : "text-red-400 bg-red-500/20"
                              }`}
                            >
                              <TrendingUp
                                className={`h-4 w-4 ${
                                  kpi.trend === "down" ? "rotate-180" : ""
                                }`}
                              />
                              <span className="font-medium">{kpi.change}</span>
                            </div>
                          </div>
                          <div className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {kpi.value}%
                          </div>
                          <div className="relative">
                            <Progress
                              value={kpi.value}
                              className="h-3 bg-gray-700"
                            />
                            <div
                              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-80"
                              style={{ width: `${kpi.value}%` }}
                            />
                          </div>
                          <div className="mt-3 text-xs text-gray-400">
                            Performance indicator
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Enhanced Performance Chart */}
              <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-blue-500" />
                      <span>Performance Analytics</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-400 hover:text-white"
                    >
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="h-80 bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-700 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                    <div className="text-center z-10">
                      <div className="relative mb-6">
                        <BarChart3 className="h-16 w-16 mx-auto text-gray-600 mb-4" />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl" />
                      </div>
                      <p className="text-gray-400 text-lg mb-2">
                        Interactive Performance Dashboard
                      </p>
                      <p className="text-sm text-gray-500">
                        Real-time analytics with machine learning insights
                      </p>
                      <div className="flex justify-center space-x-4 mt-6">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-75" />
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse delay-150" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Match Analysis Tab */}
            <TabsContent value="matches" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
                  <CardTitle className="flex items-center space-x-2 text-white">
                    <Target className="h-5 w-5 text-orange-500" />
                    <span>AI Match Analysis</span>
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Deep dive into recent matches with AI-powered insights and
                    tactical breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {matchAnalysis.map((match, index) => (
                      <Card
                        key={index}
                        className="bg-gradient-to-r from-gray-800 via-gray-900 to-black border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-6">
                            <div className="space-y-2">
                              <h3 className="font-bold text-xl text-white">
                                {match.match}
                              </h3>
                              <div className="flex items-center space-x-2 text-sm text-gray-400">
                                <Clock className="h-4 w-4" />
                                <span>{match.date}</span>
                                <Badge
                                  variant="secondary"
                                  className="bg-green-500/20 text-green-400 border-green-500/30 ml-4"
                                >
                                  Full Time
                                </Badge>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                                {match.score}
                              </div>
                              <div className="text-xs text-gray-400">
                                Final Score
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <h4 className="font-semibold text-white flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full" />
                                <span>Key Highlights</span>
                              </h4>
                              <div className="space-y-3">
                                {match.highlights.map((highlight, i) => (
                                  <div
                                    key={i}
                                    className="flex items-center space-x-3 text-sm bg-gray-800/50 rounded-lg p-3 border border-gray-700"
                                  >
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500" />
                                    <span className="text-gray-300">
                                      {highlight}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-4">
                              <h4 className="font-semibold text-white flex items-center space-x-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full" />
                                <span>AI Tactical Insights</span>
                              </h4>
                              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                                <p className="text-gray-300 leading-relaxed">
                                  {match.insights}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-700">
                            <div className="flex space-x-3">
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              >
                                <BarChart3 className="h-4 w-4 mr-2" />
                                Full Analysis
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-gray-800 border-gray-700 text-white hover:bg-gray-700"
                              >
                                <Activity className="h-4 w-4 mr-2" />
                                Watch Highlights
                              </Button>
                            </div>
                            <div className="text-xs text-gray-500">
                              AI Confidence: 94%
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  )
}
