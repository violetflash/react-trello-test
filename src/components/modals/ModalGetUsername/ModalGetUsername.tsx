import React, {useState} from 'react';
import {useTypedDispatch} from "../../../hooks/reduxHooks";
import {setUser} from "../../../redux";
import { ModalCasing } from '../../ui';
import {AddNameForm} from "../../forms";

export const ModalGetUsername = () => {
    const dispatch = useTypedDispatch();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const setName = (value: string) => {
        dispatch(setUser(value));
        setIsOpen(false);
    };


    return (
        <ModalCasing
            p="0 0 10px"
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            modalTitle="Введите свое имя:"
            actionTitle="Сохранить"
        >
            <AddNameForm onSubmit={setName}/>
        </ModalCasing>
    )
};
