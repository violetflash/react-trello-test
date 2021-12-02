import React from 'react';
import {Flex, Text} from "@chakra-ui/react";
import {useTypedSelector} from "../../hooks/reduxHooks";
import {UserAvatar} from "../UserAvatar/UserAvatar";

interface IUserProps {
    p?: string;
    m?: string;
}

export const User = (props: IUserProps) => {
    const {username} = useTypedSelector(state => state.user);
    const name = username ? username : "Гость";

    return (
        <Flex {...props} align="center">
            <UserAvatar username={name}/>
            <Text ml="10px">
                {name}
            </Text>
        </Flex>
    )
};
