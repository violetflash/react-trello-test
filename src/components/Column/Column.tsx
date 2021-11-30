import React from 'react';
import {Editable, EditableInput, EditablePreview, Flex, Text, VStack} from "@chakra-ui/react";
import {IColumn} from "../../types";
import {Card} from "../Card/Card";

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
            shadow="lg"
            bg="blue.200"
        >
            <Editable defaultValue={title} onSubmit={(nextValue: string) => handleTitleChange(id, nextValue)}>
                <EditablePreview />
                <EditableInput />
            </Editable>

            <VStack>
                {cardsView}
            </VStack>
        </Flex>
    )
};