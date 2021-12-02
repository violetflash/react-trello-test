import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";

export const CardMenu = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} variant="ghost"/>
            <MenuList>
                <MenuItem>Delete</MenuItem>
            </MenuList>
        </Menu>
    )
};