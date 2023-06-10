import { useState, useEffect } from 'react';

const ShowOptionResult = ({ optionId, alreadyVoted, results, immediatelyShow }) => {
    const [hasVoted, setHasVoted] = useState({ voted: false });
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(0);
        const index = results.findIndex(result => result.optionId === optionId);
        if (index >= 0) {
            setCount(results[index].count);
        }
    }, [ results ]);

    useEffect(() => {
        setHasVoted({voted: alreadyVoted});
    }, [ alreadyVoted ]);
    
    return (
        <span>{immediatelyShow || hasVoted.voted ? count: ''}</span>
    );
}

export default ShowOptionResult;