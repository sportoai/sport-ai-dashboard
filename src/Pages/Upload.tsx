import {
  Box,
  VStack,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react"
import UploadVideo from "@/Features/Upload/Component/FileUpload"
import TextArea from "@/Features/Upload/Component/TextArea"
import Configuration from "@/Features/Upload/Component/Configuration"

const Upload = () => {
  return (
    <Box p={6}>
      {/* Header Section */}
      <Flex
        justify="space-between"
        align="flex-start"
        mb={8}
        direction={{ base: "column", md: "row" }}
        gap={4}
      >
        <VStack align="flex-start" gap={1}>
          <Text fontSize="2xl" fontWeight="bold" color="fg.DEFAULT">
            Upload & Analysis
          </Text>
          <Text fontSize="md" color="fg.MUTED">
            Upload match videos and configure AI analysis
          </Text>
        </VStack>
        <Button colorScheme="teal" size="md" px={6}>
          Upload Settings
        </Button>
      </Flex>

      {/* Main Content Grid */}
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        {/* Left Column - Upload Section */}
        <GridItem>
          <Box
            bg="white"
            _dark={{ bg: "primary.800" }}
            borderRadius="lg"
            p={6}
            shadow="md"
          >
            <VStack align="flex-start" gap={1} mb={6}>
              <Text fontSize="lg" fontWeight="medium" color="fg.DEFAULT">
                Upload Match Video
              </Text>
              <Text fontSize="sm" color="fg.MUTED">
                Upload your match footage for AI-powered analysis
              </Text>
            </VStack>

            <VStack gap={6} align="stretch">
              <UploadVideo />
              <TextArea />
              <Configuration />
            </VStack>
          </Box>
        </GridItem>

        {/* Right Column - Processing Queue */}
        <GridItem>
          <Box
            bg="white"
            _dark={{ bg: "primary.800" }}
            borderRadius="lg"
            p={6}
            shadow="md"
          >
            <VStack align="flex-start" gap={1} mb={6}>
              <Text fontSize="lg" fontWeight="medium" color="fg.DEFAULT">
                Processing Queue
              </Text>
              <Text fontSize="sm" color="fg.MUTED">
                Track your uploads and analysis progress
              </Text>
            </VStack>

            {/* Placeholder for queue items */}
            <VStack gap={3} align="stretch">
              <Box
                p={3}
                borderRadius="md"
                bg="bg.MUTED"
                border="1px solid"
                borderColor="border.muted"
              >
                <Text fontSize="sm" color="fg.MUTED">
                  No items in queue
                </Text>
              </Box>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Upload
