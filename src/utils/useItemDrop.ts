import { useDrop } from "react-dnd";
import { useAppState } from "../state/AppStateContext";
import { moveList } from "../state/actions";
import { DropItem } from "../DropItem";

export const useItemDrop = (dropItem: DropItem) => {
  const { dispatch, draggedItem } = useAppState();
  const { id, type } = dropItem;
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
        dispatch(moveList(draggedItem.id, id));
      }
    },
  });
  return { drop };
};
