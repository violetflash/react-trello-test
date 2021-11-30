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
    onOpen: () => void;
    onClose: () => void;
}

export const ModalCasing: FC<IModalProps> = ({children, isOpen, onOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    Содержимое попапа
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
