import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, Button,
} from '@chakra-ui/react';
import {FC} from "react";

interface IModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onAction?: () => void;
    actionTitle?: string;
    onClose: () => void;
}

export const ModalCasing: FC<IModalProps> = (
    {
        children,
        isOpen,
        onAction,
        actionTitle,
        onClose
    }) => {

    const secondaryButton =
        onAction ?
            <Button variant='ghost' onClick={onAction}>{actionTitle}</Button> :
            null
    ;

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Содержимое попапа
                    {children}
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Ок
                    </Button>
                    {secondaryButton}
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
