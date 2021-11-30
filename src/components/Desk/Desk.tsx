import React, {useEffect, useState} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {getInitialData} from "../../redux";
import {IColumn} from "../../types";
import {Flex, HStack} from "@chakra-ui/react";
import {Column} from "../Column/Column";

export const Desk = () => {
    const {columns, isLoading} = useTypedSelector(state => state.dataSlice);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        //check localStorage and if nothing is there:
        const data = localStorage.getItem('trello-data');
        console.log(data);

        if (!data) {
            dispatch(getInitialData());
            return;
        }

    }, [dispatch]);

    if (!columns.length) return null;

    const columnsView = columns.map(col => <Column {...col}/>)

    return (
        <Flex flexWrap="wrap" ml="-20px">
            {columnsView}
        </Flex>
    )
};