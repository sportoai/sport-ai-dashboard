import React, { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import {
  Box,
  Card,
  Flex,
  Text,
  Badge,
  Button,
  Grid,
  Icon,
  HStack,
  VStack,
  Container,
  AspectRatio,
  Tabs,
} from "@chakra-ui/react"
import video from "@/assets/testvideo.mp4"
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaDownload,
  FaShare,
  FaArrowLeft,
  FaFastForward,
  FaFastBackward,
  FaEye,
  FaHeart,
  FaComment,
  FaFutbol,
  FaBolt,
  FaFlag,
  FaClock,
  FaChartLine,
  FaUsers,
  FaTrophy,
} from "react-icons/fa"

interface VideoControls {
  isPlaying: boolean
  volume: number
  isMuted: boolean
  currentTime: number
  duration: number
  isFullscreen: boolean
  playbackRate: number
}

interface HighlightInsights {
  speed?: string
  distance?: string
  accuracy?: string
  technique?: string
  height?: string
  timing?: string
  players?: string
}

interface Highlight {
  id: number
  type: "Goals" | "Assists" | "Corners"
  title: string
  description: string
  duration: string
  league: string
  team: string
  points: string
  views: string
  timeAgo: string
  insights: HighlightInsights
  icon: any
  color: string
  videoUrl?: string
}

const VideoPreview: React.FC = () => {
  // const location = useLocation()
  const navigate = useNavigate()
  // Hardcoded highlight for preview
  const highlight: Highlight = {
    id: 1,
    type: "Goals",
    title: "Stunning Goal - Arsenal vs Chelsea",
    description: "Incredible long-range strike from midfield",
    duration: "0:15",
    league: "Premier League",
    team: "Arsenal",
    points: "+1",
    views: "2.1K",
    timeAgo: "2 hours ago",
    insights: {
      speed: "28.4 km/h",
      distance: "35 meters",
      accuracy: "Top corner",
    },
    icon: FaFutbol,
    color: "green",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Example video URL
  }

  const [controls, setControls] = useState<VideoControls>({
    isPlaying: false,
    volume: 80,
    isMuted: false,
    currentTime: 0,
    duration: 45, // Default duration in seconds
    isFullscreen: false,
    playbackRate: 1,
  })

  const [activeTab, setActiveTab] = useState("insights")
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    setControls((prev) => {
      const next = { ...prev, isPlaying: !prev.isPlaying }
      if (videoRef.current) {
        if (next.isPlaying) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      }
      return next
    })
  }

  const toggleMute = () => {
    setControls((prev) => ({ ...prev, isMuted: !prev.isMuted }))
  }

  // const handleVolumeChange = (value: number[]) => {
  //   setControls(prev => ({ ...prev, volume: value[0], isMuted: value[0] === 0 }))
  // }

  const handleSeek = (value: number[]) => {
    setControls((prev) => ({ ...prev, currentTime: value[0] }))
  }

  const toggleFullscreen = () => {
    setControls((prev) => ({ ...prev, isFullscreen: !prev.isFullscreen }))
  }

  const changePlaybackRate = (rate: number) => {
    setControls((prev) => ({ ...prev, playbackRate: rate }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const getTypeIcon = (type: Highlight["type"]): any => {
    switch (type) {
      case "Goals":
        return FaFutbol
      case "Assists":
        return FaBolt
      case "Corners":
        return FaFlag
      default:
        return FaFutbol
    }
  }

  const getTypeColor = (type: Highlight["type"]): string => {
    switch (type) {
      case "Goals":
        return "green"
      case "Assists":
        return "blue"
      case "Corners":
        return "orange"
      default:
        return "gray"
    }
  }

  const IconComponent = getTypeIcon(highlight.type)
  const typeColor = getTypeColor(highlight.type)

  return (
    <Container maxW="7xl" py={6}>
      {/* Header */}
      <Flex align="center" gap={4} mb={6}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/highlights")}
        >
          <FaArrowLeft />
          Back to Highlights
        </Button>
        <HStack gap={2}>
          <Icon as={IconComponent} color={`${typeColor}.500`} />
          <Text fontWeight="semibold" color={`${typeColor}.600`}>
            {highlight.type}
          </Text>
        </HStack>
      </Flex>

      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={8}>
        {/* Video Player Section */}
        <VStack gap={6}>
          {/* Video Container */}
          <Card.Root width="100%" overflow="hidden">
            <Card.Body p={0}>
              <AspectRatio ratio={16 / 9} bg="black">
                <Box position="relative" width="100%" height="100%">
                  {/* Video Element */}
                  <video
                    ref={videoRef}
                    src={video}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      background: "black",
                    }}
                    controls
                  />

                  {/* Play/Pause Button Overlay */}

                  {/* Video Progress Bar */}
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    bg="blackAlpha.500"
                    p={4}
                  >
                    {/* <Progress
                        value={(controls.currentTime / controls.duration) * 100}
                        size="sm"
                        colorScheme="blue"
                        mb={3}
                      /> */}

                    {/* Video Controls */}
                    <Flex align="center" justify="space-between">
                      <HStack gap={2}>
                        <Button
                          variant="ghost"
                          size="sm"
                          color="white"
                          onClick={() =>
                            handleSeek([Math.max(0, controls.currentTime - 10)])
                          }
                        >
                          <Icon as={FaFastBackward} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          color="white"
                          onClick={togglePlay}
                        >
                          <Icon as={controls.isPlaying ? FaPause : FaPlay} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          color="white"
                          onClick={() =>
                            handleSeek([
                              Math.min(
                                controls.duration,
                                controls.currentTime + 10
                              ),
                            ])
                          }
                        >
                          <Icon as={FaFastForward} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          color="white"
                          onClick={toggleMute}
                        >
                          <Icon
                            as={controls.isMuted ? FaVolumeMute : FaVolumeUp}
                          />
                        </Button>
                        <Box width="60px">
                          {/* <Slider
                              value={[controls.isMuted ? 0 : controls.volume]}
                              onValueChange={handleVolumeChange}
                              max={100}
                              step={1}
                              size="sm"
                            /> */}
                        </Box>
                      </HStack>

                      <HStack gap={2}>
                        <Text color="white" fontSize="sm">
                          {formatTime(controls.currentTime)} /{" "}
                          {formatTime(controls.duration)}
                        </Text>
                        <Button
                          variant="ghost"
                          size="sm"
                          color="white"
                          onClick={toggleFullscreen}
                        >
                          <Icon as={FaExpand} />
                        </Button>
                      </HStack>
                    </Flex>
                  </Box>
                </Box>
              </AspectRatio>
            </Card.Body>
          </Card.Root>

          {/* Video Options */}
          <Card.Root width="100%">
            <Card.Body>
              <VStack gap={4} align="stretch">
                <Text fontSize="lg" fontWeight="semibold">
                  Playback Options
                </Text>

                {/* Playback Speed */}
                <HStack justify="space-between">
                  <Text>Playback Speed:</Text>
                  <HStack gap={2}>
                    {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
                      <Button
                        key={rate}
                        size="sm"
                        variant={
                          controls.playbackRate === rate ? "solid" : "outline"
                        }
                        colorScheme="blue"
                        onClick={() => changePlaybackRate(rate)}
                      >
                        {rate}x
                      </Button>
                    ))}
                  </HStack>
                </HStack>

                {/* Video Quality */}
                <HStack justify="space-between">
                  <Text>Quality:</Text>
                  <HStack gap={2}>
                    {["480p", "720p", "1080p"].map((quality) => (
                      <Button
                        key={quality}
                        size="sm"
                        variant={quality === "720p" ? "solid" : "outline"}
                        colorScheme="blue"
                      >
                        {quality}
                      </Button>
                    ))}
                  </HStack>
                </HStack>

                {/* Action Buttons */}
                <HStack gap={3} pt={2}>
                  <Button colorScheme="green" flex={1}>
                    <FaDownload />
                    Download
                  </Button>
                  <Button colorScheme="blue" flex={1}>
                    <FaShare />
                    Share
                  </Button>
                  <Button variant="outline" colorScheme="red">
                    <FaHeart />
                    Like
                  </Button>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>
        </VStack>

        {/* Sidebar Information */}
        <VStack gap={6}>
          {/* Video Information */}
          <Card.Root width="100%">
            <Card.Body>
              <VStack align="start" gap={4}>
                <Text fontSize="xl" fontWeight="bold">
                  {highlight.title}
                </Text>

                <Text color="gray.600" fontSize="sm">
                  {highlight.description}
                </Text>

                {/* Stats */}
                <HStack gap={4} color="gray.500" fontSize="sm">
                  <HStack gap={1}>
                    <Icon as={FaEye} />
                    <Text>{highlight.views}</Text>
                  </HStack>
                  <HStack gap={1}>
                    <Icon as={FaClock} />
                    <Text>{highlight.timeAgo}</Text>
                  </HStack>
                  <HStack gap={1}>
                    <Icon as={FaComment} />
                    <Text>24</Text>
                  </HStack>
                </HStack>

                {/* Badges */}
                <HStack gap={2} wrap="wrap">
                  <Badge colorScheme="purple" variant="subtle">
                    {highlight.league}
                  </Badge>
                  <Badge colorScheme="gray" variant="outline">
                    {highlight.team}
                  </Badge>
                  <Badge colorScheme="green" variant="solid">
                    {highlight.points}
                  </Badge>
                </HStack>
              </VStack>
            </Card.Body>
          </Card.Root>

          {/* Tabs for Additional Information */}
          <Card.Root width="100%">
            <Card.Body>
              <Tabs.Root
                value={activeTab}
                onValueChange={(e) => setActiveTab(e.value)}
              >
                <Tabs.List>
                  <Tabs.Trigger value="insights">AI Insights</Tabs.Trigger>
                  <Tabs.Trigger value="stats">Statistics</Tabs.Trigger>
                  <Tabs.Trigger value="analysis">Analysis</Tabs.Trigger>
                </Tabs.List>

                <Tabs.Content value="insights" pt={4}>
                  <VStack align="start" gap={3}>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color={`${typeColor}.700`}
                    >
                      Performance Metrics
                    </Text>
                    {Object.entries(highlight.insights).map(([key, value]) => (
                      <HStack key={key} justify="space-between" width="100%">
                        <Text
                          fontSize="sm"
                          color="gray.600"
                          textTransform="capitalize"
                        >
                          {key}:
                        </Text>
                        <Text
                          fontSize="sm"
                          fontWeight="medium"
                          color="gray.800"
                        >
                          {value}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Tabs.Content>

                <Tabs.Content value="stats" pt={4}>
                  <VStack align="start" gap={3}>
                    <HStack gap={2}>
                      <Icon as={FaChartLine} color="blue.500" />
                      <Text fontSize="sm" fontWeight="semibold">
                        Performance Statistics
                      </Text>
                    </HStack>
                    <VStack align="start" gap={2} width="100%">
                      <HStack justify="space-between" width="100%">
                        <Text fontSize="sm" color="gray.600">
                          Success Rate:
                        </Text>
                        <Text fontSize="sm" fontWeight="medium">
                          95%
                        </Text>
                      </HStack>
                      <HStack justify="space-between" width="100%">
                        <Text fontSize="sm" color="gray.600">
                          Touch Count:
                        </Text>
                        <Text fontSize="sm" fontWeight="medium">
                          3
                        </Text>
                      </HStack>
                      <HStack justify="space-between" width="100%">
                        <Text fontSize="sm" color="gray.600">
                          Ball Speed:
                        </Text>
                        <Text fontSize="sm" fontWeight="medium">
                          127 km/h
                        </Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Tabs.Content>

                <Tabs.Content value="analysis" pt={4}>
                  <VStack align="start" gap={3}>
                    <HStack gap={2}>
                      <Icon as={FaTrophy} color="gold" />
                      <Text fontSize="sm" fontWeight="semibold">
                        Expert Analysis
                      </Text>
                    </HStack>
                    <Text fontSize="sm" color="gray.600">
                      This highlight demonstrates exceptional technical ability
                      and spatial awareness. The execution under pressure
                      showcases elite-level performance characteristics.
                    </Text>
                    <HStack gap={2}>
                      <Icon as={FaUsers} color="blue.500" />
                      <Text fontSize="sm">
                        <strong>Players Involved:</strong> 4
                      </Text>
                    </HStack>
                  </VStack>
                </Tabs.Content>
              </Tabs.Root>
            </Card.Body>
          </Card.Root>

          {/* Similar Videos */}
          <Card.Root width="100%">
            <Card.Header>
              <Text fontSize="md" fontWeight="semibold">
                Related Highlights
              </Text>
            </Card.Header>
            <Card.Body>
              <VStack gap={3}>
                {[1, 2, 3].map((item) => (
                  <Flex key={item} gap={3} align="start">
                    <AspectRatio ratio={16 / 9} width="80px" minW="80px">
                      <Box bg="gray.200" borderRadius="md" />
                    </AspectRatio>
                    <VStack align="start" gap={1} fontSize="sm">
                      <Text fontWeight="medium" lineHeight="1.2">
                        Similar Goal #{item}
                      </Text>
                      <Text color="gray.500" fontSize="xs">
                        2 days ago
                      </Text>
                    </VStack>
                  </Flex>
                ))}
              </VStack>
            </Card.Body>
          </Card.Root>
        </VStack>
      </Grid>
    </Container>
  )
}

export default VideoPreview