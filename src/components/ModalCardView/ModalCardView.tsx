import React from 'react';
import {ModalCasing} from "../ui";
import {Badge, Box, Flex, Text} from "@chakra-ui/react";
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {closeCard} from "../../redux";
import {getDataFromLS, getTitleByColumnId} from "../../utils/functions";
import {AddNewItemButton} from "../AddNewItemButton/AddNewItemButton";

export const ModalCardView = () => {
    const dispatch = useTypedDispatch();
    const {isOpened, card} = useTypedSelector(state => state.modalCard);
    // const {username} = useTypedSelector(state => state.user);

    if (!isOpened) return null;


    const title = getTitleByColumnId(card.columnId, getDataFromLS());

    const handleClose = () => {
        dispatch(closeCard());
    }

    const handleAddDescr = () => {
        console.log("Добавить описание карточки")
    }

    return (
        <ModalCasing onClose={handleClose} isOpen={isOpened} modalTitle={card.title}>
            <Flex align="center">в колонке: <Badge colorScheme="green" ml="15px">{title}</Badge></Flex>
            <Box>
                <Text mb="30px">Автор: {card.author ? card.author : "Гость"}</Text>
                <Text my="10px">Описание:</Text>
                <AddNewItemButton
                    // isDisabled={username !== card.author}
                    variant="description"
                    text={card.description ? card.description : "Добавить более подробное описание"}
                    onAdd={handleAddDescr}
                    placeholder="Добавить более подробное описание"
                    buttonText="Сохранить"
                />
                <Text mt="30px">Комментарии:</Text>
            </Box>

        </ModalCasing>
    )
};