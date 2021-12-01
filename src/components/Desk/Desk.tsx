import React, {useEffect} from 'react';
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {getInitialData} from "../../redux";

import {Flex} from "@chakra-ui/react";
import {Column} from "../Column/Column";

export const Desk = () => {
    const {columns} = useTypedSelector(state => state.dataSlice);
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

    const columnsView = columns.map(col => <Column key={col.id} {...col}/>)

    return (
        <Flex flexWrap="wrap" ml="-20px" p="0 20px 20px" align="flex-start">
            {columnsView}
        </Flex>
    )
};
