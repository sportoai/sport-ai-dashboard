import { Field, VStack, Textarea } from "@chakra-ui/react"

const TextArea = () => {
  return (
    <VStack gap="10" width="full">
      <Field.Root required>
        <Field.Label>
          MatchTitle <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Start typing..." variant="subtle" />
      </Field.Root>
      <Field.Root required>
        <Field.Label>
        Description <Field.RequiredIndicator />
        </Field.Label>
        <Textarea placeholder="Write Description..." variant="subtle" />
      </Field.Root>
   
    </VStack>
  )
}

export default TextArea
