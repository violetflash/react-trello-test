import React, {useEffect} from 'react';
import {useTypedDispatch} from "../../hooks/reduxHooks";
import {getInitialData} from "../../redux";

export const Cards = () => {

    const dispatch = useTypedDispatch();

    useEffect(() => {
        //check localStorage and if nothing is there:
        dispatch(getInitialData());

    }, [dispatch]);

    return (
        <div>

        </div>
    )
};