import React from "react"
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
  // Select,
  Container,
  AspectRatio,
} from "@chakra-ui/react"
import {
  FaPlay,
  // FaEye,
  FaClock,
  FaShare,
  FaDownload,
  FaFutbol,
  FaBolt,
  FaFlag,
} from "react-icons/fa"

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
}

const Highlights: React.FC = () => {
  const navigate = useNavigate()
  const highlights: Highlight[] = [
    {
      id: 1,
      type: "Goals",
      title: "Stunning Goal - Arsenal vs Chelsea",
      description: "Incredible long-range strike from midfield",
      duration: "0:45",
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
    },
    {
      id: 2,
      type: "Assists",
      title: "Perfect Assist - De Bruyne Magic",
      description: "Pinpoint cross leads to easy tap-in",
      duration: "0:32",
      league: "Manchester City",
      team: "Assist",
      points: "+1",
      views: "1.8K",
      timeAgo: "4 hours ago",
      insights: {
        speed: "45.2 km/h",
        accuracy: "98% pass accuracy",
        technique: "Outside foot",
      },
      icon: FaBolt,
      color: "blue",
    },
    {
      id: 3,
      type: "Corners",
      title: "Corner Kick Masterclass",
      description: "Tactical corner routine results in goal",
      duration: "0:28",
      league: "Set Piece",
      team: "Tactical",
      points: "+1",
      views: "945",
      timeAgo: "6 hours ago",
      insights: {
        height: "2.8 meters",
        timing: "Perfect",
        players: "4 involved",
      },
      icon: FaFlag,
      color: "orange",
    },
  ]

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

  return (
    <Container maxW="7xl" py={6}>
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Flex align="center" gap={2}>
          <Text
            fontSize="2xl"
            fontWeight="bold"
            color="black"
            _dark={{ color: "white" }}
          >
            All Highlights
          </Text>
          <Badge colorScheme="gray" borderRadius="full" px={2}>
            6
          </Badge>
        </Flex>
        {/* <Select width="200px" defaultValue="recent">
          <option value="recent">Most Recent</option>
          <option value="popular">Most Popular</option>
          <option value="goals">Goals</option>
          <option value="assists">Assists</option>
        </Select> */}
      </Flex>

      {/* Highlights Grid */}
      <Grid templateColumns="repeat(auto-fit, minmax(400px, 1fr))" gap={6}>
        {highlights.map((highlight: Highlight) => {
          const IconComponent: any = getTypeIcon(highlight.type)
          const typeColor: string = getTypeColor(highlight.type)

          return (
            <Card.Root key={highlight.id} maxW="sm" overflow="hidden">
              <Card.Body p={0}>
                {/* Video Thumbnail */}
                <AspectRatio ratio={16 / 9} bg="gray.100">
                  <Flex
                    align="center"
                    justify="center"
                    bg="gray.50"
                    position="relative"
                  >
                    <Box
                      as="button"
                      width="60px"
                      height="60px"
                      borderRadius="full"
                      bg="blackAlpha.700"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      _hover={{
                        bg: "blackAlpha.800",
                        transform: "scale(1.05)",
                      }}
                      transition="all 0.2s"
                    >
                      <Icon as={FaPlay} color="white" boxSize={6} ml={1} />
                    </Box>

                    {/* Duration Badge */}
                    <Badge
                      position="absolute"
                      bottom={3}
                      right={3}
                      bg="blackAlpha.800"
                      color="white"
                      borderRadius="md"
                      px={2}
                      py={1}
                    >
                      {highlight.duration}
                    </Badge>
                  </Flex>
                </AspectRatio>

                {/* Content */}
                <Box p={4}>
                  {/* Type Badge */}
                  <HStack mb={3} gap={2}>
                    <Icon as={IconComponent} color={`${typeColor}.500`} />
                    <Text fontWeight="semibold" color={`${typeColor}.600`}>
                      {highlight.type}
                    </Text>
                  </HStack>

                  {/* Title and Description */}
                  <VStack align="start" gap={2} mb={4}>
                    <Card.Title
                      fontSize="lg"
                      fontWeight="bold"
                      color="black"
                      _dark={{ color: "white" }}
                    >
                      {highlight.title}
                    </Card.Title>
                    <Card.Description color="gray.600" fontSize="sm">
                      {highlight.description}
                    </Card.Description>
                  </VStack>

                  {/* League/Team Info */}
                  <HStack gap={3} mb={4}>
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

                  {/* AI Insights */}
                  <Box bg="green.50" p={3} borderRadius="md" mb={4}>
                    <Text
                      fontSize="sm"
                      fontWeight="semibold"
                      color="green.700"
                      mb={2}
                    >
                      AI Insights
                    </Text>
                    <VStack align="start" gap={1}>
                      {Object.entries(highlight.insights).map(
                        ([key, value]: [string, string]) => (
                          <HStack
                            key={key}
                            justify="space-between"
                            width="100%"
                          >
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
                        )
                      )}
                    </VStack>
                  </Box>

                  {/* Stats */}
                  <HStack gap={4} mb={4} color="gray.500" fontSize="sm">
                    {/* <HStack gap={1}>
                      <Icon as={FaEye} />
                      <Text>{highlight.views}</Text>
                    </HStack> */}
                    <HStack gap={1}>
                      <Icon as={FaClock} />
                      <Text>{highlight.timeAgo}</Text>
                    </HStack>
                  </HStack>
                </Box>
              </Card.Body>

              <Card.Footer justifyContent="space-between" p={4} pt={0}>
                <Button
                  colorScheme="blue"
                  size="sm"
                  flex={1}
                  mr={2}
                  onClick={() => navigate("/video-preview")}
                >
                  Watch
                </Button>
                <HStack gap={2}>
                  <Button variant="outline" size="sm" minW="auto">
                    <Icon as={FaShare} />
                  </Button>
                  <Button variant="outline" size="sm" minW="auto">
                    <Icon as={FaDownload} />
                  </Button>
                </HStack>
              </Card.Footer>
            </Card.Root>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Highlights
