import {Badge, Box, Button, Divider, Flex, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/reduxHooks";
import {getDataFromLS, getTitleByColumnId} from "../../../utils/functions";
import {
    addNewCardComment, closeAlert,
    closeCard,
    deleteCard, openAlert,
    updateCard,
    updateCardDescription,
    updateCardTitle
} from "../../../redux";
import {ModalCasing} from "../../ui";
import {AddNewItemButton} from "../../AddNewItemButton/AddNewItemButton";
import {EditableField} from "../../forms";
import {Comment} from "../../Comment/Comment";
import {nanoid} from "@reduxjs/toolkit";
import {SettingsIcon} from "@chakra-ui/icons";

export const ModalCardView = () => {
    const dispatch = useTypedDispatch();
    const {isOpened, card} = useTypedSelector(state => state.modalCard);
    const {username} = useTypedSelector(state => state.user);

    if (!isOpened) return null;

    const title = getTitleByColumnId(card.columnId, getDataFromLS());

    const handleClose = () => {
        dispatch(closeCard());
    }

    const handleAddDescription = (value: string) => {
        dispatch(updateCardDescription({
            columnId: card.columnId,
            cardId: card.id,
            value: value
        }));
        dispatch(updateCard({
            ...card,
            description: value
        }))
    };

    const handleAddComment = (value: string) => {
        const newComment = {
            id: nanoid(),
            columnId: card.columnId,
            cardId: card.id,
            author: username,
            text: value
        };
        dispatch(addNewCardComment(newComment));
        dispatch(updateCard({
            ...card,
            comments: [...card.comments, newComment]
        }))
    };

    const handleTitleChange = (value: string) => {
        dispatch(updateCardTitle({
            columnId: card.columnId,
            cardId: card.id,
            value
        }));
    };

    const handleCloseAlert = () => {
        dispatch(closeAlert());
    }

    const handleOpenAlert = () => {
        dispatch(openAlert({
            text: "Удалить карточку?",
            onConfirm: handleDeleteCard,
            confirmText:"Да",
            declineText:"Нет",
            onClose: handleCloseAlert
        }))
    }

    const handleDeleteCard = () => {
        dispatch(deleteCard({
            cardId: card.id,
            columnId: card.columnId,
        }));
        dispatch(closeCard());
    }

    return (
        <ModalCasing onClose={handleClose} isOpen={isOpened}>
            <Flex align="center" justify="space-between" m="40px 0 0">
                <EditableField onChange={handleTitleChange} defaultValue={card.title} isDisabled={!username} />
                <Menu>
                    <MenuButton as={Button} rightIcon={<SettingsIcon />} variant="ghost"/>
                    <MenuList>
                        <MenuItem onClick={handleOpenAlert} isDisabled={!username}>Delete</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>

            <Flex align="center" mb="30px">
                в колонке:
                <Badge colorScheme="green" ml="15px">{title}</Badge>
            </Flex>
            <Box>
                <Text mb="30px">Автор: {card.author}</Text>
                <Text my="10px">Описание:</Text>
                <AddNewItemButton
                    isDisabled={!username}
                    variant="description"
                    text={card.description ? card.description : "Добавить более подробное описание"}
                    description={card.description}
                    onAdd={handleAddDescription}
                    placeholder="Добавить более подробное описание"
                    buttonText="Сохранить"
                />
                <Divider mt="20px"/>
                <Text mt="20px">Комментарии:</Text>
                <AddNewItemButton
                    isDisabled={!username}
                    text="Добавить комментарий"
                    onAdd={handleAddComment}
                    placeholder="Добавить комментарий"
                    buttonText="Добавить"
                />
                <Box mt="20px">
                    {[...card.comments].reverse().map(comment => (
                        <Comment key={comment.id} {...comment} cardId={card.id} columnId={card.columnId} />
                    ))}
                </Box>
            </Box>
        </ModalCasing>
    )
};
