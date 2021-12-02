import React, {useState} from 'react';
import {IComment} from "../../types";
import {Box, Button, ButtonGroup, Flex, Text} from "@chakra-ui/react";
import {UserAvatar} from "../UserAvatar/UserAvatar";
import {closeAlert, deleteComment, openAlert, updateCard, updateComment} from "../../redux";
import {useTypedDispatch, useTypedSelector} from "../../hooks/reduxHooks";
import {AddForm} from "../forms";
import {findItemIndexById, insertItemAtIndex, removeItemAtIndex} from "../../utils/functions";

export const Comment = (props: IComment) => {
    const [showForm, setShowForm] = useState<boolean>(false);
    const dispatch = useTypedDispatch();
    const {card} = useTypedSelector(state => state.modalCard);
    const {username} = useTypedSelector(state => state.user);


    const handleCloseAlert = () => {
        dispatch(closeAlert());
    };

    const handleDeleteComment = () => {
        dispatch(deleteComment({
            id: props.id,
            cardId: props.cardId,
            columnId: props.columnId
        }));
        const comments = card.comments.filter(comment => comment.id !== props.id);
        dispatch(updateCard({...card, comments}))
    }

    const handleOpenAlert = () => {
        dispatch(openAlert({
            onConfirm: handleDeleteComment,
            onClose: handleCloseAlert,
            confirmText: "Да",
            declineText: "Нет",
            text: "Удалить комментарий?",
            description: "Комментарий удаляется навсегда. Отмена невозможна."
        }))
    };

    const handleChangeComment = (value: string) => {
        dispatch(updateComment({
            id: props.id,
            cardId: props.cardId,
            columnId: props.columnId,
            value: value
        }));

        const newCard = JSON.parse(JSON.stringify(card));
        const commentIndex = findItemIndexById(props.id, newCard.comments);
        const comment = newCard.comments[commentIndex];
        comment.text = value;
        removeItemAtIndex(newCard.comments, commentIndex);
        insertItemAtIndex(newCard.comments, comment, commentIndex);
        dispatch(updateCard(newCard));
    }

    return (
        <Flex mb="10px">
            <UserAvatar username={props.author}/>
            <Box flex="1" ml="10px">
                <Text>{props.author} пишет:</Text>
                {!showForm &&
                  <>
                    <Text p="5px 15px" bg="gray.200" color="black">{props.text}</Text>
                    <ButtonGroup size='sm' variant="ghost" isDisabled={username !== props.author}>
                      <Button onClick={() => setShowForm(true)}>Изменить</Button>
                      <Button onClick={handleOpenAlert}>Удалить</Button>
                    </ButtonGroup>
                  </>
                }
                {showForm &&
                <AddForm
                  onClose={() => setShowForm(false)}
                  isOpen={showForm}
                  onAdd={handleChangeComment}
                  placeholder="Введите комментарий"
                  description={props.text}
                />
                }
            </Box>
        </Flex>
    )
};
