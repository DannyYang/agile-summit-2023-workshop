import { throttle } from 'lodash';
import { useEffect } from 'react';

const ShowOption = ({ option, selectedOptionId, onVoteChange }) => {

    const handleOnChange = (event) => {
        onVoteChange(event.target.value);
    };
    
    const throttledHandleOnChange = throttle(handleOnChange, 300);

    return (
        <label htmlFor={option.optionId} className="option">
            <input
                type="radio"
                name="options" 
                value={option.optionId}
                id={option.optionId}
                onChange={throttledHandleOnChange}
                checked={selectedOptionId == option.optionId}>
            </input>
            {option.label}
        </label>
    );
};

export default ShowOption;