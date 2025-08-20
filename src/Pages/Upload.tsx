import {
  Box,
  VStack,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
  Badge,
} from "@chakra-ui/react"
import UploadVideo from "@/Features/Upload/Component/FileUpload"
import TextArea from "@/Features/Upload/Component/TextArea"
import Configuration from "@/Features/Upload/Component/Configuration"
import useSelectedAnalysisType from "@/Features/Upload/store"

const Upload = () => {
  const { SelectedAnalysisArr } = useSelectedAnalysisType()
  const handleStartUpload = () => {
    // Handle upload logic here
    console.log(
      "Starting upload with selected analysis types:",
      SelectedAnalysisArr
    )
  }

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
        <Button
          color="white"
          backgroundColor={"gray.700"}
          _hover={{
            opacity: 0.8,
          }}
          size="md"
          px={6}
        >
          Upload Settings
        </Button>
      </Flex>

      {/* Main Content Grid */}
      <Grid templateColumns={{ base: "1fr", lg: "2fr 1fr" }} gap={6}>
        {/* Left Column - Upload Section */}
        <GridItem>
          <Box
            background="white"
            _dark={{ bg: "black" }}
            borderRadius="lg"
            p={6}
            shadow="md"
          >
            <VStack gap={6} align="stretch">
              <UploadVideo />
              <TextArea />
              <Configuration />

              {/* Selected Analysis Types Section */}

              {/* Upload Button */}
              <Button
                color={"white"}
                size="lg"
                w="full"
                py={6}
                backgroundColor={"gray.700"}
                fontSize="md"
                fontWeight="medium"
                _hover={{ opacity: 0.8 }}
                onClick={handleStartUpload}
              >
                Start Upload & Analysis
              </Button>
            </VStack>
          </Box>
        </GridItem>

        {/* Right Column - Upload Statistics & Processing Queue */}
        <GridItem>
          <VStack gap={6}>
            {/* Upload Statistics */}
            <Box
              bg="white"
              _dark={{ bg: "primary.800" }}
              borderRadius="lg"
              p={6}
              shadow="md"
              w="full"
            >
              <VStack align="flex-start" gap={4} mb={4}>
                <Text fontSize="lg" fontWeight="medium" color="fg.DEFAULT">
                  Upload Statistics
                </Text>
              </VStack>

              <VStack gap={3} align="stretch">
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="fg.MUTED">
                    Total Uploads
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    47
                  </Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="fg.MUTED">
                    Data Processed
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    156 GB
                  </Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="fg.MUTED">
                    Analysis Time
                  </Text>
                  <Text fontSize="sm" fontWeight="medium">
                    23.5 hours
                  </Text>
                </Flex>
                <Flex justify="space-between" align="center">
                  <Text fontSize="sm" color="fg.MUTED">
                    Success Rate
                  </Text>
                  <Badge colorScheme="green" variant="solid">
                    98.7%
                  </Badge>
                </Flex>
              </VStack>
            </Box>

            {/* Processing Queue */}
            <Box
              bg="white"
              _dark={{ bg: "primary.800" }}
              borderRadius="lg"
              p={6}
              shadow="md"
              w="full"
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
                  _dark={{ bg: "whiteAlpha.100" }}
                  border="1px solid"
                  borderColor="border.muted"
                >
                  <Text fontSize="sm" color="fg.MUTED">
                    No items in queue
                  </Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Upload
