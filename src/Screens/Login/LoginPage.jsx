
import React from 'react';
import StyledContainer from './Components/Container';
import StyledLabel from './Components/Label';
import StyledInput from './Components/TextInput';
import StyledFormControlLabel from './Components/FormControl';
import StyledSubmit from './Components/SubmitButton';
import StyledCheckbox from './Components/CheckBox';



export default function SignInPage() {
    // const history = unstable_HistoryRouter();
    const [clientCode, setClientCode] = React.useState('');

  const handleClientCodeChange = (event) => {
    setClientCode(event.target.value);
    };
    

    // const handleSignIn = () => {
    //   history.push('/home');
    // };
  

    return (
        <StyledContainer>
            <StyledLabel variant='h3'>USERNAME</StyledLabel>
            <StyledInput     size='small' id="login-input-user" variant="outlined" />
            <StyledLabel variant='h3'>CLIENT CODE</StyledLabel>
            <StyledInput size='small' m id="login-input-client" variant="outlined" onChange={handleClientCodeChange} />
            {clientCode.length >= 4 && (
                <React.Fragment>
                  <StyledLabel variant='h3'>PASSWORD</StyledLabel>
                  <StyledInput size='small' id="login-input-password" variant="outlined" type='password'/>
                  <StyledFormControlLabel
                    control={<StyledCheckbox id="login-sign-up" />}
                    label="Keep me Signed in"
                  />
                  <StyledSubmit variant="contained"     >
                    Sign in
                  </StyledSubmit>
                </React.Fragment>
              )}
        </StyledContainer>

    );
}
