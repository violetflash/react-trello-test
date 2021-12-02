import {Badge, Box, Flex, Text} from "@chakra-ui/react";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/reduxHooks";
import {getDataFromLS, getTitleByColumnId} from "../../../utils/functions";
import {addNewCardComment, closeCard, updateCard, updateCardDescription, updateCardTitle} from "../../../redux";
import {ModalCasing} from "../../ui";
import {AddNewItemButton} from "../../AddNewItemButton/AddNewItemButton";
import {EditableField} from "../../forms";
import {Comment} from "../../Comment/Comment";
import {nanoid} from "@reduxjs/toolkit";



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

    return (
        <ModalCasing onClose={handleClose} isOpen={isOpened}>
            <EditableField m="30px 0 0" onChange={handleTitleChange} defaultValue={card.title} isDisabled={!username} />
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
                <Text mt="30px">Комментарии:</Text>
                <AddNewItemButton
                    isDisabled={!username}
                    text="Добавить комментарий"
                    onAdd={handleAddComment}
                    placeholder="Добавить комментарий"
                    buttonText="Добавить"
                />
                <Box mt="20px">
                    {[...card.comments].reverse().map(comment => <Comment key={comment.id} {...comment}/>)}
                </Box>
            </Box>

        </ModalCasing>
    )
};
