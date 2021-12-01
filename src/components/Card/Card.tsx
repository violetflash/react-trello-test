import React from 'react';
import {ICard} from "../../types";
import {Box, Flex, Icon, Text, useColorModeValue} from "@chakra-ui/react";
import {ChatIcon} from '@chakra-ui/icons';
import {useTypedDispatch} from "../../hooks/reduxHooks";
import {openCard} from "../../redux";

export const Card = (props: ICard) => {
    const dispatch = useTypedDispatch();
    const cardBg = useColorModeValue("white", "gray.200");

    const handleOpenCard = () => {
        dispatch(openCard({...props}));
    }

    return (
        <Box
            as="button"
            p="5px 15px"
            w="full"
            shadow="md"
            bg={cardBg}
            rounded="4px"
            _hover={{bg: "gray.50"}}
            justifyContent="flex-start"
            onClick={handleOpenCard}
        >
            <Text mb="5px" textAlign="left">{props.title}</Text>
            {props.comments.length > 0 &&
            <Flex align="center">
              <Icon as={ChatIcon} color="gray.500"/>
              <Text as="span" ml="10px">{props.comments.length}</Text>
            </Flex>
            }
        </Box>
    )
};