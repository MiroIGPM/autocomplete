import { ChangeEvent, KeyboardEvent } from 'react';

import { IAutoCompleteDataItem } from '../../models';

export interface IAutoCompleteHook {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  suggestions: IAutoCompleteDataItem[] | [];
  onSuggestionClikc: (suggestion: string) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
  selectedIndex: number;
  onMouseHover: (index: number) => void;
  onMouseLeave: () => void;
}

export enum Keys {
  ENTER = 'Enter',
  ESC = 'Escape',
  UP = 'ArrowUp',
  DOWN = 'ArrowDown',
}
