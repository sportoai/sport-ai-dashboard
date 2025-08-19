import { HStack, VStack, Text, Button } from "@chakra-ui/react"
import UploadVideo from "@/Features/Upload/Component/FileUpload"
import TextArea from "@/Features/Upload/Component/TextArea"
import Configuration from "@/Features/Upload/Component/Configuration"

const Upload = () => {
  return (
    <VStack>
      <VStack>
        <HStack>
          <VStack>
            <Text>Upload & Analysis</Text>
            <Text>Upload match videos and configure AI analysis</Text>
          </VStack>
          <Button>Upload Setting</Button>
        </HStack>
        <HStack>
          <VStack>
            <Text>Upload Match Video</Text>
            <Text>Upload your match footage for AI-powered analysis</Text>
            <UploadVideo />
            <TextArea />
            <Configuration />
          </VStack>
          <VStack>
            <Text>Processing Queue</Text>
            <Text>Track your uploads and analysis progress</Text>
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default Upload
