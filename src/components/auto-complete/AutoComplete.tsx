import './autocomplete.css';

import { FC } from 'react';

import { AutoCompleteInput, AutoCompleteList } from './components';
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
  } = useAutoComplete(autoCompleteData);

  return (
    <div className="auto-complete">
      <AutoCompleteInput
        inputValue={inputValue}
        onInputChange={onInputChange}
        onKeyPress={onKeyPress}
      />
      <AutoCompleteList
        listItems={suggestions}
        onItemClick={onSuggestionClikc}
        onMouseHover={onMouseHover}
        onMouseLeave={onMouseLeave}
        selectedIndex={selectedIndex}
      />
    </div>
  );
};
