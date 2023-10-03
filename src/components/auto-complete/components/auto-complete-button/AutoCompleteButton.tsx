import './auto-complete-button.css';

import { FC } from 'react';

import { IAutoCompleteButtonProps } from '../../models/auto-complete-button.props';

export const AutoCompliteButton: FC<IAutoCompleteButtonProps> = ({
  label,
  onButtonClick,
}) => {
  return (
    <button onClick={onButtonClick} className="auto-complete-button">
      {label}
    </button>
  );
};
