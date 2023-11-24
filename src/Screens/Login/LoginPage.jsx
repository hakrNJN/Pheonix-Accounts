
import React from 'react';
import StyledContainer from './Components/Container';
import StyledLabel from './Components/Label';
import StyledInput from './Components/TextInput';
import StyledFormControlLabel from './Components/FormControl';
import StyledSubmit from './Components/SubmitButton';
import StyledCheckbox from './Components/CheckBox';
import { useDispatch } from 'react-redux';
import { setUserName, setToken } from '../../Store/Slice/AuthSlice';
import SmallLoading from './Components/SmallLoading';
import appConfig from '../../Config/AppConfig';
import { useApiMutation, useApiQuery } from '../../Controllers/apiController';
import Headers from '../../Utils/HeaderBuilder';



export default function SignInPage() {
  const [form, setForm] = React.useState({ userid: '', clientcode: '', password: '' });
  const [showFragment, setShowFragment] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === 'clientcode' && event.target.value.length < 4 && event.target.name === 'userid' && event.target.value.length <= 3) {
      setShowFragment(false);
    } else if (event.target.name === 'clientcode' && event.target.value.length >= 4 && event.target.name === 'userid' && event.target.value.length > 3) {
      setShowFragment(true);
    }
  };
  
  const header = new Headers(null,'application/x-www-form-urlencoded')
 
  const validationPath = `${appConfig.apiPath.basePath}/${appConfig.apiPath.getUser}`;
  const loginPath = `${appConfig.apiPath.basePath}/${appConfig.apiPath.login}`;

  const validationData = {
    'username': form.userid,
    'clientcode': form.clientcode
  }; // validation data

  const loginData = {
    'username': form.userid,
    'clientcode': form.clientcode,
    'password': form.password,
    'IFCM': null,
    'AFCM': null,
    'IDeviceType': null,
    'ADeviceType': null
  }; // login data
  
  const method = 'POST'; 

  const validationMutation = useApiMutation(method, validationPath, validationData,header.getHeaders() );
  const loginMutation = useApiMutation(method, loginPath, loginData, header);
  
  React.useEffect(() => {
    if (form.clientcode.length >= 4 && form.userid.length > 3) {
      validationMutation.mutate(validationData, {
        onSuccess: (data) => {
          setShowFragment(true);
        },
      });
    }
  }, [form.clientcode]);

  const handleSignIn = () => {
    if (form.password) {
      // Make a second API request with the password
      loginMutation.mutate(loginData, {
        onSuccess: (data) => {
          if (data && data.token) {
            dispatch(loginSuccess(data));
          }
        },
      });
    }
  };

  // Batch action creator
const loginSuccess = (data) => (dispatch) => {
  dispatch(setUserName(form.userid));
  dispatch(setToken(data.token));
};

  return (
    <StyledContainer>
      <StyledLabel variant='h3'>USERNAME</StyledLabel>
      <StyledInput size='small' id="login-input-user" name='userid' variant="outlined" onChange={handleChange}/>
      <StyledLabel variant='h3'>CLIENT CODE</StyledLabel>
      <StyledInput size='small' id="login-input-client" name='clientcode' variant="outlined" onChange={handleChange} />
      {validationMutation.isLoading ? (
        <SmallLoading/>
      ) : showFragment && (
        <React.Fragment>
          <StyledLabel variant='h3'>PASSWORD</StyledLabel>
          <StyledInput size='small' id="login-input-password" name='password' variant="outlined" type='password' onChange={handleChange} />
          <StyledFormControlLabel
            control={<StyledCheckbox id="login-sign-up" />}
            label="Keep me Signed in"
          />
          <StyledSubmit variant="contained" onClick={handleSignIn}>
            Sign in
          </StyledSubmit>
        </React.Fragment>
      )}
      {validationMutation.isError ?
        <div>
          <StyledLabel variant='h3'>{ validationMutation.error.message}</StyledLabel>
        </div>:<div></div>
      }
    </StyledContainer>

  );
}
