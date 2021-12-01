import React from 'react';
import {Editable, EditableInput, EditablePreview, Flex, Text, VStack} from "@chakra-ui/react";
import {IColumn} from "../../types";
import {Card} from "../Card/Card";
import {AddNewCardButton} from "../AddNewCardButton/AddNewCardButton";

export const Column = ({id, title, cards}:IColumn) => {

    const cardsView = cards.map(elem => <Card key={elem.id} {...elem}/>)

    const handleTitleChange = (id: string, nextValue: string) => {
        console.log(nextValue);
        console.log(id);
    }

    return (
        <Flex
            w={['calc(100%)', 'calc(100% / 2 - 20px)', 'calc(100% / 3 - 20px)', 'calc(100% / 4 - 20px)']}
            m="0 0 40px 20px"
            direction="column"
            shadow="lg"
            bg="gray.200"
            color="black"
            p="15px"
            rounded="md"
        >
            <Editable
                defaultValue={title}
                mb="10px"
                w="full"
                onSubmit={(nextValue: string) => handleTitleChange(id, nextValue)}
                fontWeight="bold"
            >
                <EditablePreview  w="full"/>
                <EditableInput  />
            </Editable>
            <VStack>
                {cardsView}
            </VStack>
            <AddNewCardButton/>
        </Flex>
    )
};
