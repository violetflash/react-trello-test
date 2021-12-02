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
    children?: React.ReactNode;
    isOpen: boolean;
    onAction?: () => void;
    actionTitle?: string;
    onClose: () => void;
    modalTitle?: string;
    p?: string;
}

export const ModalCasing: FC<IModalProps> = (
    {
        children,
        isOpen,
        onAction,
        actionTitle,
        modalTitle,
        onClose,
        p = "0 0 30px",
    }) => {

    const secondaryButton =
        onAction ?
            <Button colorScheme="blue" onClick={onAction}>{actionTitle}</Button> :
            null
    ;

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent p={p}>
                {modalTitle && <ModalHeader mt="15px">{modalTitle}</ModalHeader>}
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>

                {onAction && <ModalFooter>
                    {secondaryButton}
                </ModalFooter>}
            </ModalContent>
        </Modal>
    )
}
