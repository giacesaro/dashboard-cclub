import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import MuiAlert from '@mui/material/Alert';
import { setLoading } from '../Redux/Application/ApplicationAction';
import { setErrorBoolean, setSuccess } from '../Redux/Blockchain/BlockchainAction';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarCustom() {
  const [state, setState] = React.useState({
    vertical: 'top',
    horizontal: 'center',
  });
  const dispatch = useDispatch();
  const loading = useSelector(state => state.application.loading);
  const message = useSelector(state => state.application.message);
  const errorBoolean = useSelector(state => state.blockchain.errorBoolean);
  const errorMessage = useSelector(state => state.blockchain.errorMessage);
  const success = useSelector(state => state.blockchain.success);
  const successMessage = useSelector(state => state.blockchain.successMessage);


  const { vertical, horizontal } = state;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setLoading(false));
    dispatch(setErrorBoolean(false, ''));
    dispatch(setSuccess(false, ''))
  };

  return (
    <div>
      <Snackbar open={(loading || errorBoolean || success)} onClose={handleClose} anchorOrigin={{ vertical, horizontal }} autoHideDuration={(errorBoolean || success) ? 4500 : null} key={vertical + horizontal}>
        <Alert onClose={handleClose} severity={loading ? 'info' : errorBoolean ? 'error' : success ? 'success' : ''} action={''}>
          {message || errorMessage || successMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
