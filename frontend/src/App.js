import { paramsApi, resultApi, voteApi } from './api'

import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

import EnterUserInfo from './components/EnterUserInfo';
import ShowOptionList from './components/ShowOptionList';
import ShowResults from './components/ShowResults';
import ColorfulBackground from './components/ColorfulBackground';

const App = () => {
	const [ userId, setUserId ] = useState('');
	const [ options, setOptions ] = useState([]);
	const [ results, setResults ] = useState([]);
	const [ question, setQuestion ] = useState('');
	const [ isParamsApiSuccess, setIsParamsApiSuccess ] = useState(true);
	const [ isResultApiSuccess, setIsResultApiSuccess ] = useState(true);

	useEffect(() => {
		paramsApi()
			.then(res => {
				if (res.status == 200) {
					setOptions(res.data.options);
					setQuestion(res.data.question);
					setIsParamsApiSuccess(true);
				} else {
					setIsParamsApiSuccess(false);
				}
			});
	}, []);

	const changeUserHandler = () => {
		setUserId('');
		setResults([]);
	}

	const loginHanlder = (userId) => {
		setUserId(userId);
	}

	const postToVoteHandler = (newVoteRecords) => {
		return voteApi(newVoteRecords);
	}

	const showResultHandler = async() => {
		resultApi().then(res => {
			if (res.status == '200') {
				setResults(res.data);
				setIsResultApiSuccess(true);
			} else {
				setIsResultApiSuccess(false);
			}
		});
	}

	return isParamsApiSuccess 
		? (
			<div id="app">
				<ShowResults 
					onShowResult={showResultHandler} />
				<Typography 
					mt={2} mb={2}
					variant="h4" component="h1">
					{question}
				</Typography>
				<EnterUserInfo
					onChangeUser={changeUserHandler} 
					onLogin={loginHanlder} />
				<ShowOptionList 
					options={options} 
					userId={userId} 
					results={results} 
					onVote={postToVoteHandler} 
					onShowResult={showResultHandler} />
				<ColorfulBackground 
					options={options}
					results={results}
					isResultApiSuccess={isResultApiSuccess} />
			</div>	
		)
	: <div>無法取得題目</div> ;
}

export default App;
