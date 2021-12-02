import React from 'react';
import {ICard} from "../../types";
import {Box, Flex, HStack, Text, Tooltip, useColorModeValue} from "@chakra-ui/react";
import {ChatIcon, HamburgerIcon} from '@chakra-ui/icons';
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
            <HStack align="center">
                {props.description &&
                <Tooltip label='Есть описание' fontSize='md'>
                  <HamburgerIcon color="gray.600" />
                </Tooltip>
                    // <Icon as={HamburgerIcon} color="gray.500"/>
                }
                {props.comments.length > 0 &&
                <Tooltip label='Есть комментарии' fontSize='md'>
                  <Flex align="center">
                    <ChatIcon color="gray.500" />
                    <Text as="span" ml="5px">{props.comments.length}</Text>
                  </Flex>
                </Tooltip>
                }

            </HStack>
        </Box>
    )
};
