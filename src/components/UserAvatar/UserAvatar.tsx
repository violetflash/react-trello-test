import React from 'react';
import {Avatar} from "@chakra-ui/react";

interface IUserAvatar {
    username: string;
    size?: "xs" | "lg" | "md";
    m?: string;
}

export const UserAvatar = ({username, m, size="md"}:IUserAvatar) => {
    return <Avatar size={size} m={m} name={username}/>
};