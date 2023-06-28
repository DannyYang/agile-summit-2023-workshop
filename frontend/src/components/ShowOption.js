import { throttle } from 'lodash';
import { FormControlLabel, Radio } from '@mui/material';

import { useEffect } from 'react';

const ShowOption = ({ option, selectedOptionId, onVoteChange }) => {

    const handleOnChange = (event) => {
        onVoteChange(event.target.value);
    };
    
    const throttledHandleOnChange = throttle(handleOnChange, 300);

    return (<>
        <FormControlLabel control={<Radio />} 
            value={option.optionId}
            onChange={throttledHandleOnChange}
            checked={selectedOptionId == option.optionId}
            label={option.label} />
    </>);
};

export default ShowOption;