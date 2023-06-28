import { Button } from '@mui/material';

const ShowResults = ({ onShowResult }) => {
    return (
        <Button variant="contained" size="large"
            style={{ float: 'right' }}
            onClick={onShowResult}>
            直接查看結果
        </Button>
    );
}

export default ShowResults;