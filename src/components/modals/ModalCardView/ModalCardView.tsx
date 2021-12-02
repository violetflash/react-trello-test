import {Badge, Box, Flex, Text} from "@chakra-ui/react";
import {useTypedDispatch, useTypedSelector} from "../../../hooks/reduxHooks";
import {getDataFromLS, getTitleByColumnId} from "../../../utils/functions";
import {closeCard, updateCardDescription, updateCardTitle} from "../../../redux";
import {ModalCasing} from "../../ui";
import {AddNewItemButton} from "../../AddNewItemButton/AddNewItemButton";
import {EditableField} from "../../forms";
import {useEffect} from "react";


export const ModalCardView = () => {
    const dispatch = useTypedDispatch();
    const {isOpened, card} = useTypedSelector(state => state.modalCard);
    const {username} = useTypedSelector(state => state.user);

    useEffect(() => {

    }, [card.description])

    if (!isOpened) return null;

    const title = getTitleByColumnId(card.columnId, getDataFromLS());

    const handleClose = () => {
        dispatch(closeCard());
    }

    const handleAddDescription = (value: string) => {
        console.log("Добавить описание карточки")
        dispatch(updateCardDescription({
            columnId: card.columnId,
            cardId: card.id,
            value
        }))
    }

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
                    onAdd={handleAddDescription}
                    placeholder="Добавить более подробное описание"
                    buttonText="Сохранить"
                />
                <Text mt="30px">Комментарии:</Text>
            </Box>

        </ModalCasing>
    )
};
