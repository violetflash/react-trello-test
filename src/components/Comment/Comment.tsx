import React from 'react';
import {IComment} from "../../types";
import {Avatar, Box, Button, ButtonGroup, Flex, Text} from "@chakra-ui/react";

export const Comment = (props: IComment) => {

    const handleDeleteComment = () => {
        console.log("Удаляем комментарий")
    };

    return (
        <Flex mb="10px">
            <Avatar/>
            <Box flex="1" ml="10px">
                <Text>Автор: {props.author}</Text>
                <Text p="5px 15px" bg="gray.200" color="black">{props.text}</Text>
                <ButtonGroup size='sm' variant="ghost">
                    <Button>Изменить</Button>
                    <Button onClick={handleDeleteComment}>Удалить</Button>
                </ButtonGroup>
            </Box>
        </Flex>
    )
};
