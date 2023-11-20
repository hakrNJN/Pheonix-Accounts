
import React from 'react';
import StyledContainer from './Components/Container';
import StyledLabel from './Components/Label';
import StyledInput from './Components/TextInput';
import StyledFormControlLabel from './Components/FormControl';
import StyledSubmit from './Components/SubmitButton';
import StyledCheckbox from './Components/CheckBox';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../Store/Slice/AuthSlice';
import LoadingSpinner from '../../Components/Global/LoadinfSpinner';
import SmallLoading from './Components/SmallLoading';



export default function SignInPage() {
  // const history = unstable_HistoryRouter();
  const [clientCode, setClientCode] = React.useState('');
  const [showFragment, setShowFragment] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const dispatch = useDispatch();

  // const navigate = useNavigate();

  const handleSignIn = () => {
    dispatch(setToken('Token'));
  };

  //temporary functions to mimic loading effect
  const handleClientCodeChange = (event) => {
    setClientCode(event.target.value);
  };

  React.useEffect(() => {
    if (clientCode.length >= 4) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowFragment(true);
      }, 2000);
    }
  }, [clientCode]);

  return (
    <StyledContainer>
      <StyledLabel variant='h3'>USERNAME</StyledLabel>
      <StyledInput size='small' id="login-input-user" variant="outlined" />
      <StyledLabel variant='h3'>CLIENT CODE</StyledLabel>
      <StyledInput size='small' id="login-input-client" variant="outlined" onChange={handleClientCodeChange} />
      {loading ? (
        <SmallLoading/>
      ) : showFragment && (
        <React.Fragment>
          <StyledLabel variant='h3'>PASSWORD</StyledLabel>
          <StyledInput size='small' id="login-input-password" variant="outlined" type='password' />
          <StyledFormControlLabel
            control={<StyledCheckbox id="login-sign-up" />}
            label="Keep me Signed in"
          />
          <StyledSubmit variant="contained" onClick={handleSignIn}>
            Sign in
          </StyledSubmit>
        </React.Fragment>
      )}
    </StyledContainer>

  );
}
