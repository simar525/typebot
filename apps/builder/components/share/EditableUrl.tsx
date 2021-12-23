import {
  HStack,
  Tooltip,
  EditablePreview,
  EditableInput,
  Text,
  Editable,
  Button,
  ButtonProps,
  useEditableControls,
} from '@chakra-ui/react'
import { EditIcon } from 'assets/icons'
import { CopyButton } from 'components/shared/buttons/CopyButton'
import React from 'react'

type EditableUrlProps = {
  publicId?: string
  onPublicIdChange: (publicId: string) => void
}

export const EditableUrl = ({
  publicId,
  onPublicIdChange,
}: EditableUrlProps) => {
  return (
    <Editable
      as={HStack}
      spacing={3}
      defaultValue={publicId}
      onSubmit={onPublicIdChange}
    >
      <HStack spacing={1}>
        <Text>https://</Text>
        <Tooltip label="Edit">
          <EditablePreview
            mx={1}
            bgColor="blue.500"
            color="white"
            px={3}
            rounded="md"
            cursor="pointer"
            display="flex"
            fontWeight="semibold"
          />
        </Tooltip>

        <EditableInput px={2} />

        <Text>.typebot.io/</Text>
      </HStack>

      <HStack>
        <EditButton size="xs" />
        <CopyButton size="xs" textToCopy={`https://${publicId}.typebot.io/`} />
      </HStack>
    </Editable>
  )
}

const EditButton = (props: ButtonProps) => {
  const { isEditing, getEditButtonProps } = useEditableControls()

  return isEditing ? (
    <></>
  ) : (
    <Button leftIcon={<EditIcon />} {...props} {...getEditButtonProps()}>
      Edit
    </Button>
  )
}
