import { recordApi } from '../api'

import { useState, useEffect } from 'react';

import ShowOption from "./ShowOption";

const ShowOptionList = ({   options, userId, results, 
                            onVote, 
                            onShowResult }) => {
	const [ records, setRecords ] = useState([]);
    const [ selectedOptionId, setSelectedOptionId ] = useState('');
    const [ isApiSuccess, setIsApiSuccess ]  = useState(true);
    
    useEffect(() => {
        setSelectedOptionId('');
        getRecords();
    }, [ userId ]);

    const getRecords = () => {
        if (!userId) {
            return;
        }
        
        recordApi(userId)
            .then(res => {
                if (res.status == '200') {
                    setIsApiSuccess(true);
                } else {
                    setIsApiSuccess(false);
                    return;
                }

                setRecords([ ...res.data ]);
                if (res.data.length > 0) {
                    setSelectedOptionId(res.data[res.data.length-1].optionId)
                }
            });
    };

    const handleVoteChange = (optionId) => {
        const originalSelectedOptionId = selectedOptionId;
        setSelectedOptionId(optionId);

        onVote({ userId, optionId })
            .then((res) => {
                if (res.status == '200') {
                    getRecords();
                    onShowResult();
                } else {
                    setSelectedOptionId(originalSelectedOptionId);
                    const isDuplicatedVoting = res.status == 'V001';
                    alert(isDuplicatedVoting 
                        ? res.message 
                        : "發生錯誤，無法投票");
                    if (isDuplicatedVoting) {
                        onShowResult();
                    }
                }
            });
    }
    
    useEffect(() => {
        const isRecordExist = records.length > 0 
            && records[0].userId == userId;

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
    
    return isApiSuccess
        ? <div>{renderedOptions}</div>
        : <div>取得投票結果發生錯誤</div>;
}

export default ShowOptionList;