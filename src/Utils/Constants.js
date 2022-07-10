import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";

export const CssTextFieldPartner = styled(TextField)({
    '& label.Mui-focused': {
        color: '#153633',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#153633',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#153633',
        },
        '&:hover fieldset': {
            borderColor: '#153633',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#153633',
        },
    },
});

export const CssTextFieldElite = styled(TextField)({
    '& label.Mui-focused': {
        color: '#821218',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#821218',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#821218',
        },
        '&:hover fieldset': {
            borderColor: '#821218',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#821218',
        },
    },
});

export const CssTextFieldPremium = styled(TextField)({
    '& label.Mui-focused': {
        color: '#424141',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#424141',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#424141',
        },
        '&:hover fieldset': {
            borderColor: '#424141',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#424141',
        },
    },
});