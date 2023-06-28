import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Button, TextField } from '@mui/material';
// import { debounce } from 'lodash';

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HowToVoteIcon from '@mui/icons-material/HowToVote';


const EnterUserInfo = ({ onChangeUser, onLogin }) => {
    const [ userId, setUserId ] = useState('');
    const [ loading, setLoading ] = useState(false);
    // const debouncedOnChangeUser = debounce(onChangeUser, 200);

    const formOnSubmit = (event) => {
        event.preventDefault();
        onLogin(userId);
    };

    const inputOnChange = (event) => {
        setUserId(event.target.value);
        // debouncedOnChangeUser();
        onChangeUser();
    }

    return (
        <Paper component="form" id="userInfoForm" onSubmit={formOnSubmit}
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="請輸入 User ID 進行投票"
                inputProps={{ 'aria-label': 'enter user id' }}
                value={userId} onChange={inputOnChange}
            />
            <LoadingButton type="submit" 
                size="large"
                loading={loading}>
                    <HowToVoteIcon />
            </LoadingButton>

        </Paper>
    );
}

export default EnterUserInfo;