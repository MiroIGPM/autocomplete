import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

import { IAutoCompleteDataItem } from '../models';
import { IAutoCompleteHook, Keys } from './models/auto-complete';

export const useAutoComplete = (
  autoCompleteData: IAutoCompleteDataItem[],
): IAutoCompleteHook => {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<IAutoCompleteDataItem[] | []>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    filterOptions(event.target.value);
  };

  const debounce = useCallback((func, delay) => {
    let timeoutId: number;
    return (...args: string[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }, []);

  const filterOptions = useCallback(
    debounce(async (inputValue: string) => {
      try {
        if (inputValue.trim() === '') {
          setSuggestions([]);
          return;
        }

        const filteredData = await autoCompleteData.filter((item) =>
          item.text.toLowerCase().includes(inputValue.toLowerCase()),
        );
        setSuggestions(filteredData);
      } catch (error) {
        console.error(error);
      }
    }, 300),
    [autoCompleteData],
  );

  const onSuggestionClikc = (suggestion: string) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  const onKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case Keys.ENTER:
        if (selectedIndex !== -1) {
          setInputValue(suggestions[selectedIndex].text);
          setSuggestions([]);
        }
        break;
      case Keys.ESC:
        setSuggestions([]);
        break;
      case Keys.UP:
        event.preventDefault();
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        break;
      case Keys.DOWN:
        event.preventDefault();
        setSelectedIndex((prevIndex) =>
          prevIndex < suggestions.length - 1 ? prevIndex + 1 : suggestions.length - 1,
        );
        break;
      default:
        break;
    }
  };

  const onMouseHover = (index: number) => {
    setSelectedIndex(index);
  };

  const onMouseLeave = () => {
    setSelectedIndex(-1);
  };

  const clearInputValue = () => {
    setInputValue('');
    setSuggestions([]);
  };

  return {
    inputValue,
    onInputChange,
    suggestions,
    onSuggestionClikc,
    onKeyPress,
    selectedIndex,
    onMouseHover,
    onMouseLeave,
    clearInputValue,
  };
};
