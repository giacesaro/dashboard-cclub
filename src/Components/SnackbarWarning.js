import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import { setLoading } from '../Redux/Application/ApplicationAction';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarWarning() {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const dispatch = useDispatch();
  const loadingWarning = useSelector(state => state.application.loadingWarning);

  const { vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setLoading(false, '', false));
  };

  return (
    <div>
      <Snackbar className='mt-14' open={(loadingWarning)} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} key={vertical + horizontal}>
        <Alert onClose={handleClose} severity={'warning'} action={''}>
            WARNING! Don't close or refresh the page, you could lose your money! Wait for confirmation of purchase!
        </Alert>
      </Snackbar>
    </div>
  );
}
