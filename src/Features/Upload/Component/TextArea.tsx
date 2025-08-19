import { Field, VStack, Textarea } from "@chakra-ui/react"

const TextArea = () => {
  return (
    <VStack gap={4} width="full">
      <Field.Root required>
        <Field.Label fontSize="sm" fontWeight="medium" color="fg.DEFAULT">
          Match Title <Field.RequiredIndicator color="red.500" />
        </Field.Label>
        <Textarea
          placeholder="Enter match title..."
          variant="subtle"
          bg="bg.MUTED"
          border="1px solid"
          borderColor="border.muted"
          _focus={{
            borderColor: "teal.500",
            boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
          }}
          resize="none"
          rows={2}
        />
      </Field.Root>

      <Field.Root required>
        <Field.Label fontSize="sm" fontWeight="medium" color="fg.DEFAULT">
          Description <Field.RequiredIndicator color="red.500" />
        </Field.Label>
        <Textarea
          placeholder="Write a detailed description of the match..."
          variant="subtle"
          bg="bg.MUTED"
          border="1px solid"
          borderColor="border.muted"
          _focus={{
            borderColor: "teal.500",
            boxShadow: "0 0 0 1px var(--chakra-colors-teal-500)",
          }}
          resize="vertical"
          rows={4}
        />
      </Field.Root>
    </VStack>
  )
}

export default TextArea