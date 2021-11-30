import React from 'react';
import {ICard} from "../../types";
import {Box} from "@chakra-ui/react";

export const Card = ({title, description, comments, columnTitle}: ICard) => {
    return (
        <Box
            shadow="lg"
        >
            Карточка
        </Box>
    )
};