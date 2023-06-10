import { paramsApi, resultApi, voteApi } from './api'

import { useState, useEffect } from 'react';

import EnterUserInfo from './components/EnterUserInfo';
import ShowOptionList from './components/ShowOptionList';
import ShowResults from './components/ShowResults';
import ColorfulBackground from './components/ColorfulBackground';

const App = () => {
	const [ userId, setUserId ] = useState('');
	const [ options, setOptions ] = useState([]);
	const [ results, setResults ] = useState([]);
	const [ question, setQuestion ] = useState('');

	useEffect(() => {
		const getOptions = async () => {
			const res = await paramsApi();
			if (res.status == 200) {
				setOptions(res.data.options);
				setQuestion(res.data.question);
			}
		}
		getOptions();
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
		const res = await resultApi();
		setResults(res.data);
	}

	return (
		<div id="app">
			<ShowResults 
				onShowResult={showResultHandler} />
			<h1>{question}</h1>
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
				results={results} />
		</div>
	);
}

export default App;
