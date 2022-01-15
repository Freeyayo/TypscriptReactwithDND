import React, { FC } from "react";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { addList } from "./state/actions";
import { CustomDragLayer } from "./CustomDragLayer";

export const App: FC = () => {
  const { lists, dispatch } = useAppState();
  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => {
        const { text, id } = list;
        return <Column key={id} id={id} text={text} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch(addList(text))}
      ></AddNewItem>
    </AppContainer>
  );
};
