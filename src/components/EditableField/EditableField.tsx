import {
    Box,
    ButtonGroup,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    IconButton,
    useEditableControls
} from "@chakra-ui/react";
import {CheckIcon, CloseIcon, EditIcon} from "@chakra-ui/icons";

interface IEditable {
    defaultValue: string;
    m?: string;
    onChange: (nextValue: string) => void;
}


export const EditableField = ({defaultValue, m, onChange}: IEditable) => {

    const EditableControls = () => {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls()

        return isEditing ? (
            <ButtonGroup justifyContent='center' size='sm'>
                <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} aria-label="сохранить" />
                <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} aria-label="отмена"/>
            </ButtonGroup>
        ) : (
            <Flex justifyContent='center'>
                <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()}  aria-label="редактировать" />
            </Flex>
        )
    }


    return (
        <Editable
            // textAlign='center'
            maxW="320px"
            defaultValue={defaultValue}
            fontSize='2xl'
            isPreviewFocusable={false}
            onSubmit={(nextValue: string) => onChange(nextValue)}
        >
            <Flex align="center" m={m}>
                <Box mr="20px">
                    <EditablePreview />
                    <EditableInput maxW="270px"/>
                </Box>
                <EditableControls />
            </Flex>

        </Editable>
    )
}
