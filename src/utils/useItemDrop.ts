import { useDrop } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { moveList } from "../state/actions";

export const useItemDrop = (columnId: string) => {
  const { dispatch, draggedItem } = useAppState();
  const [, drop] = useDrop({
    accept: "COLUMN",
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === columnId) {
          return;
        }
        dispatch(moveList(draggedItem.id, columnId));
      }
    },
  });
  return { drop };
};
