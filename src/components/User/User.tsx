import React from 'react';
import {Text} from "@chakra-ui/react";
import {useTypedSelector} from "../../hooks/reduxHooks";

interface IUserProps {
    p?: string;
    m?: string;
}

export const User = (props: IUserProps) => {
    const {username} = useTypedSelector(state => state.user);

    return (
        <Text {...props}>
            {username ? username : "Гость"}
        </Text>
    )
};
