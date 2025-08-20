import { Heading, Text, VStack, HStack, Box, Badge } from "@chakra-ui/react"
import useSelectedAnalysisType from "../store" // adjust path if needed

const cardData = [
  {
    id: 1,
    title: "Team Performance",
    description: "Analyze team tactics, formations, and overall performance",
    time: "13 min - 5 min",
  },
  {
    id: 2,
    title: "Player Statistics",
    description: "View detailed player statistics and performance metrics",
    time: "10 min - 3 min",
  },
  {
    id: 3,
    title: "Match Analysis",
    description: "Break down match footage and analyze key moments",
    time: "15 min - 7 min",
  },
]

const ConfigurationCard = ({
  card,
  isSelected,
  onClick,
}: {
  card: (typeof cardData)[0]
  isSelected: boolean
  onClick: () => void
}) => (
  <Box
    p={4}
    borderRadius="md"
    bg={isSelected ? "green.50" : "bg.MUTED"}
    border="2px solid"
    borderColor={isSelected ? "green.500" : "border.muted"}
    cursor="pointer"
    onClick={onClick}
    _hover={{ borderColor: "teal.500", transition: "all 0.2s" }}
  >
    <HStack justify="space-between" align="flex-start">
      <VStack align="flex-start" gap={1} flex={1}>
        <Heading size="sm" color="black">
          {card.title}
        </Heading>
        <Text fontSize="sm" color="black" lineHeight="1.4">
          {card.description}
        </Text>
      </VStack>
      <Badge colorScheme="teal" variant="subtle" fontSize="xs" px={2} py={1}>
        {card.time}
      </Badge>
    </HStack>
  </Box>
)

const Configuration = () => {
  const {
    SelectedAnalysisArr,
    setSelectedAnalysisType,
    removeSelectedAnalysisType,
  } = useSelectedAnalysisType()
  console.log("selectedAnalysisTypes", SelectedAnalysisArr)

  const handleCardClick = (card: (typeof cardData)[0]) => {
    const isAlreadySelected = SelectedAnalysisArr.some(
      (item) => item.id === card.id
    )
    if (isAlreadySelected) {
      removeSelectedAnalysisType(card.id)
    } else {
      setSelectedAnalysisType(card)
    }
  }

  return (
    <VStack gap={3} align="stretch">
      <Text fontSize="md" fontWeight="medium" color="fg.DEFAULT" mb={2}>
        Analysis Configuration
      </Text>
      {cardData.map((card) => (
        <ConfigurationCard
          key={card.id}
          card={card}
          isSelected={SelectedAnalysisArr.some((item) => item.id === card.id)}
          onClick={() => handleCardClick(card)}
        />
      ))}
    </VStack>
  )
}

export default Configuration
