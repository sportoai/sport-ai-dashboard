import { Card, Heading, Stack, Text, VStack, HStack } from "@chakra-ui/react"

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
];

// Accept props for dynamic rendering
const ConfigurationCard = ({ title, description, time }: { title: string; description: string; time: string }) => {
  return (
    <Stack>
      <HStack>
        <VStack>
          <Text>
            <Heading size="md">{title}</Heading>
          </Text>
          <Text color="fg.muted">
            {description}
          </Text>
        </VStack>
        <Text>{time}</Text>
      </HStack>
    </Stack>
  )
}

const Configuration = () => {
  return (
    <VStack>
      {
        cardData.map((card, index) => (
          
          <ConfigurationCard key={index} {...card} />
        ))
      }
    </VStack>
  )
}

export default Configuration