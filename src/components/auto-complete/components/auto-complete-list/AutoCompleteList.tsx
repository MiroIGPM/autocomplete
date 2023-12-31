import './auto-complete-list.css';

import { FC } from 'react';

import { IAutoCompleteListProps } from '../../models';
import { getHighlightedText } from './utils/get-highlighted-text';

export const AutoCompleteList: FC<IAutoCompleteListProps> = ({
  listItems,
  onItemClick,
  onMouseHover,
  onMouseLeave,
  selectedIndex,
  inputValue,
}) => {
  return (
    <>
      {listItems.length > 0 && (
        <ul className="auto-complete-list">
          {listItems.map((item, index) => {
            const handleItemClick = () => {
              onItemClick(item.text);
            };

            const handleMouseEnter = () => {
              onMouseHover(index);
            };

            return (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
              <li
                key={item.id}
                onClick={handleItemClick}
                className={`auto-complete-list-item ${
                  index === selectedIndex && 'highlighted'
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {getHighlightedText(item.text, inputValue)}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
