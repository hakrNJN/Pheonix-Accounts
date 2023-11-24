
import React from 'react';
import StyledContainer from './Components/Container';
import StyledLabel from './Components/Label';
import StyledInput from './Components/TextInput';
import StyledFormControlLabel from './Components/FormControl';
import StyledSubmit from './Components/SubmitButton';
import StyledCheckbox from './Components/CheckBox';
import { useDispatch } from 'react-redux';
import { setUserName, setToken, setClientId, setCompanyId, setClientLogo, setFirstName, setFromDate, setUptoDate, setRoleName, setUrl } from '../../Store/Slice/AuthSlice';
import SmallLoading from './Components/SmallLoading';
import appConfig from '../../Config/AppConfig';
import { useApiMutation, useApiQuery } from '../../Controllers/apiController';
import Headers from '../../Utils/HeaderBuilder';
import SecureLS from 'secure-ls';

const ls = new SecureLS({ encodingType: 'aes' });


export default function SignInPage() {
  const [form, setForm] = React.useState({ userid: '', clientcode: '', password: '' ,rememberMe:false});
  const [showFragment, setShowFragment] = React.useState(false);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === 'clientcode' && event.target.value.length < 4 && form.userid<= 3) {
      setShowFragment(false);
    } else if (event.target.name === 'clientcode' && event.target.value.length >= 4 && form.userid> 3) {
      setShowFragment(true);
    }
  };
 
  const handleCheck = (event) => {
    setForm(prevForm => ({
      ...prevForm,
      'rememberMe' : !prevForm.rememberMe,
    }));
  }

  React.useEffect(() => {
    console.table(form);
  }, [form]);

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
  const loginMutation = useApiMutation(method, loginPath, loginData, header.getHeaders());
  
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
          console.log(data.value.token)
          if (data && data.value.token) {
            dispatch(loginSuccess(data.value));
          }
        },
      });
    }
  };

  // Batch action creator
  const loginSuccess = (data) => (dispatch) => {
  console.log(data.token)
  dispatch(setUserName(form.userid));
  dispatch(setClientId(data.clientId));
  dispatch(setClientLogo(data.clientLogo));
  dispatch(setCompanyId(data.companyId));
  dispatch(setFirstName(data.firstName));
  dispatch(setFromDate(data.fromDate));
  dispatch(setUptoDate(data.uptoDate));
  dispatch(setRoleName(data.roleName));
  dispatch(setToken(data.token));
  dispatch(setUrl(data.url));
  if (form.rememberMe) { 
    ls.set('token', data.token);
    ls.set('userName', form.userid);
    ls.set('passWord', form.password);
    ls.set('firstName', data.firstName);
    ls.set('clientLogo', data.clientLogo);
    ls.set('lastUpload', data.lastUpload);
    ls.set('companyId', data.companyId);
    ls.set('fromDate', data.fromDate);
    ls.set('uptoDate', data.uptoDate);
    ls.set('url', data.url);
    ls.set('clientId', data.clientId);
    ls.set('roleName', data.roleName);
  }

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
            control={<StyledCheckbox id="rememberMe" name='rememberMe' onChange={handleCheck}/>}
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
