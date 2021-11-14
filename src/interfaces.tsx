export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

export interface DragItem {
  index: number;
  id: string;
  type: string;
}
