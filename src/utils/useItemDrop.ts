import { useDrop } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { moveList, moveTask } from "../state/actions";
import { DropItem } from "../DropItem";

export const useItemDrop = (dropItem: DropItem) => {
  const { dispatch, draggedItem } = useAppState();
  const { id, type, columnId = "" } = dropItem;
  const [, drop] = useDrop({
    accept: type,
    hover() {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === type) {
        if (draggedItem.id === id) {
          return;
        }
        switch (draggedItem.type) {
          case "COLUMN":
            dispatch(moveList(draggedItem.id, id));
            break;
          case "CARD":
            dispatch(
              moveTask(draggedItem.id, id, draggedItem.columnId, columnId)
            );
            break;
          default:
            break;
        }
      }
    },
  });
  return { drop };
};
