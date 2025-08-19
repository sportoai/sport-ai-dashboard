import { Box, Flex, Spinner, Image } from "@chakra-ui/react"
export const InitialAppLoading = () => {
  return (
    <Box h="100vh" w="100vw">
      <Flex justify="center" align="center" h="full" w="full">
        <Image
          src={
            "https://res.cloudinary.com/dcwtwloem/image/upload/v1753105997/SportAi_cpsfgs.png"
          }
          h={28}
          w={28}
        />
      </Flex>
    </Box>
  )
}

export const CircularLoading = () => {
  return (
    <Flex
      justify="center"
      align="center"
      minH="200px"
      minW="200px"
      borderRadius="50%"
    >
      <Spinner size="xl" color="secondary.500" />
    </Flex>
  )
}
