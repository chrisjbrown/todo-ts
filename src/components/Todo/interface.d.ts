export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface ITodoProps {
  todo: ITodo;
  index: number;
  onRemove: Function;
}