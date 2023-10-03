import './auto-complete-input.css';

import { FC } from 'react';

import { IAutoCompleteInputProps } from '../../models/';

export const AutoCompleteInput: FC<IAutoCompleteInputProps> = ({
  inputValue,
  onInputChange,
  onKeyPress,
}) => {
  return (
    <div className="auto-complete-input">
      <input
        className="auto-complete-input-field"
        type="text"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Type something"
        onKeyDown={onKeyPress}
      />
    </div>
  );
};
