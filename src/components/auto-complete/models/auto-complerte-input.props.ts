import { ChangeEvent, KeyboardEvent } from 'react';

export interface IAutoCompleteInputProps {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: KeyboardEvent<HTMLInputElement>) => void;
}
