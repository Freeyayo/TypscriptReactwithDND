import React, { FC } from "react";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./state/AppStateContext";

export const App: FC = () => {
  const { lists } = useAppState();
  return (
    <AppContainer>
      {lists.map((list) => {
        const { text, id } = list;
        return <Column key={id} id={id} text={text} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => console.log(text)}
      ></AddNewItem>
    </AppContainer>
  );
};
