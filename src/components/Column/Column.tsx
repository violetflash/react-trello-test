import React, {useCallback} from 'react';
import {Editable, EditableInput, EditablePreview, Flex, VStack} from "@chakra-ui/react";
import {IColumn} from "../../types";
import {Card} from "../Card/Card";
// import {AddNewCardButton} from "../AddNewCardButton/AddNewCardButton";
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {addNewCard, updateColumnTitle} from '../../redux';
import { AddNewItemButton } from '../AddNewItemButton/AddNewItemButton';

export const Column = ({id, title, cards}:IColumn) => {
    const dispatch = useTypedDispatch();
    const {username} = useTypedSelector(state => state.user);
    const cardsView = cards.map(elem => <Card key={elem.id} {...elem}/>)

    const handleChange = (id: string, nextValue: string) => {
        dispatch(updateColumnTitle({id, title: nextValue}));
    }

    const handleAddCard = useCallback((value) => {
        dispatch(addNewCard({columnId: id, title: value, author: username}))
    }, [dispatch, id, username]);


    return (
        <Flex
            w={['calc(100%)', 'calc(100% / 2 - 20px)', 'calc(100% / 3 - 20px)', 'calc(100% / 4 - 20px)']}
            m="0 0 40px 20px"
            direction="column"
            align="flex-start"
            shadow="lg"
            bg="gray.300"
            color="black"
            p="15px"
            rounded="md"
        >
            <Editable
                isDisabled={!username}
                defaultValue={title}
                mb="10px"
                w="full"
                onSubmit={(nextValue: string) => handleChange(id, nextValue)}
                fontWeight="bold"
            >
                <EditablePreview  w="full"/>
                <EditableInput  />
            </Editable>
            <VStack mb="15px" w="full">
                {cardsView}
            </VStack>
            {/*<AddNewCardButton colId={id}/>*/}
            <AddNewItemButton
                isDisabled={!username}
                placeholder="Ввести заголовок для карточки"
                text="Добавить карточку"
                onAdd={handleAddCard}
            />
        </Flex>
    )
};
