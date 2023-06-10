import { recordApi } from '../api'

import { useState, useEffect } from 'react';

import ShowOption from "./ShowOption";

const ShowOptionList = ({   options, userId, results, 
                            onVote, 
                            onShowResult }) => {
	const [ records, setRecords ] = useState([]);
    const [ selectedOptionId, setSelectedOptionId ] = useState('');
    
    useEffect(() => {
        setSelectedOptionId('');
        getRecords();
    }, [ userId ]);

    const getRecords = async () => {
        if (!userId) {
            return;
        }
        
        const res = await recordApi(userId);
        if (res.status != '200') {
            return;
        }
        
        setRecords([ ...res.data ]);
        
        if (res.data.length > 0) {
            setSelectedOptionId(res.data[res.data.length-1].optionId)
        }
    };

    const handleVoteChange = (optionId) => {
        const originalSelectedOptionId = selectedOptionId;
        setSelectedOptionId(optionId);

        onVote({ userId, optionId })
            .then((res) => {
                if (res.status == '200') {
                    getRecords();
                } else {
                    setSelectedOptionId(originalSelectedOptionId);
                    alert(res.message);
                }
            });

        onShowResult();
    }
    
    useEffect(() => {
        const isRecordExist = records.length > 0 && records[0].userId == userId;

        if (isRecordExist) {
            onShowResult();
        }
    }, [ records ]);


    if (!userId || !options) {
        return null;
    };

    const renderedOptions = options.map((option, index) => {
        return <ShowOption 
            key={index}  
            option={option}
            selectedOptionId={selectedOptionId}
            onVoteChange={handleVoteChange} />;
    });
    
    return (
        <div id="options">
            {renderedOptions}
        </div>
    );
}

export default ShowOptionList;