import { Heading, Text, VStack, HStack, Box, Badge } from "@chakra-ui/react"

const cardData = [
  {
    title: "Team Performance",
    description: "Analyze team tactics, formations, and overall performance",
    time: "13 min - 5 min",
  },
  {
    title: "Player Statistics",
    description: "View detailed player statistics and performance metrics",
    time: "10 min - 3 min",
  },
  {
    title: "Match Analysis",
    description: "Break down match footage and analyze key moments",
    time: "15 min - 7 min",
  },
]

// Accept props for dynamic rendering
const ConfigurationCard = ({
  title,
  description,
  time,
}: {
  title: string
  description: string
  time: string
}) => {
  return (
    <Box
      p={4}
      borderRadius="md"
      bg="bg.MUTED"
      border="1px solid"
      borderColor="border.muted"
      _hover={{ borderColor: "teal.500", transition: "all 0.2s" }}
    >
      <HStack justify="space-between" align="flex-start">
        <VStack align="flex-start" gap={1} flex={1}>
          <Heading size="sm" color="fg.DEFAULT">
            {title}
          </Heading>
          <Text fontSize="sm" color="fg.MUTED" lineHeight="1.4">
            {description}
          </Text>
        </VStack>
        <Badge colorScheme="teal" variant="subtle" fontSize="xs" px={2} py={1}>
          {time}
        </Badge>
      </HStack>
    </Box>
  )
}

const Configuration = () => {
  return (
    <VStack gap={3} align="stretch">
      <Text fontSize="md" fontWeight="medium" color="fg.DEFAULT" mb={2}>
        Analysis Configuration
      </Text>
      {cardData.map((card, index) => (
        <ConfigurationCard key={index} {...card} />
      ))}
    </VStack>
  )
}

export default Configuration
