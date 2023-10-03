export interface IAutoCompleteListProps {
  listItems: IListItems[];
  onItemClick: (item: string) => void;
  onMouseHover: (index: number) => void;
  onMouseLeave: () => void;
  selectedIndex: number;
}

interface IListItems {
  id: number;
  text: string;
}
