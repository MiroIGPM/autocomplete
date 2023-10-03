import './autocomplete.css';

import { FC } from 'react';

import { AutoCompleteInput, AutoCompleteList, AutoCompliteButton } from './components';
import { useAutoComplete } from './hooks/auto-complete';
import { IAutoCompleteProps } from './models';

export const AutoComplete: FC<IAutoCompleteProps> = ({ autoCompleteData }) => {
  const {
    inputValue,
    onInputChange,
    suggestions,
    onSuggestionClikc,
    onKeyPress,
    selectedIndex,
    onMouseHover,
    onMouseLeave,
    clearInputValue,
  } = useAutoComplete(autoCompleteData);

  return (
    <div className="auto-complete">
      <div className="auto-complete-inp-btn">
        <AutoCompleteInput
          inputValue={inputValue}
          onInputChange={onInputChange}
          onKeyPress={onKeyPress}
        />
        <AutoCompliteButton label="clear all" onButtonClick={clearInputValue} />
      </div>
      <AutoCompleteList
        listItems={suggestions}
        onItemClick={onSuggestionClikc}
        onMouseHover={onMouseHover}
        onMouseLeave={onMouseLeave}
        selectedIndex={selectedIndex}
        inputValue={inputValue}
      />
    </div>
  );
};
