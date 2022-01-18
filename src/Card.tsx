import React, { useRef } from "react";
import { CardContainer } from "./styles";
import { useItemDrag } from "./utils/useItemDrag";
import { useDrop } from "react-dnd";
import { useAppState } from "./state/AppStateContext";
import { isHidden } from "./utils/isHidden";
import { moveTask, setDraggedItem } from "./state/actions";
import { useItemDrop } from "./utils/useItemDrop";

type CardProps = {
  text: string;
  id: string;
  columnId: string;
  isPreview?: boolean;
};

export const Card = ({ text, id, columnId, isPreview }: CardProps) => {
  const { draggedItem } = useAppState();
  const ref = useRef<HTMLDivElement>(null);

  const { drop } = useItemDrop({
    type: "CARD",
    id,
    columnId,
  });

  const { drag } = useItemDrag({
    type: "CARD",
    id,
    text,
    columnId,
  });

  drag(drop(ref));

  return (
    <CardContainer
      isHidden={isHidden(draggedItem, "CARD", id, isPreview)}
      isPreview={isPreview}
      ref={ref}
    >
      {text}
    </CardContainer>
  );
};
