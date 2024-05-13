import { Link as RouterLink } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
  email: 'christina@gmail.com',
  password: '123456',
  displayName: 'Christina Lorenzo'
}

const fomValidations = {
  email: [ ( value ) => value.includes('@'), 'Email must have a @'],
  password: [ ( value ) => value.length >= 6, 'Pass must have at least 6 letters'],
  displayName: [ ( value ) => value.length >= 1, 'Name is mandatory']
}

export const RegisterPage = () => {

  const { displayName, email, password, formState, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, fomValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Full name"
              type="text"
              placeholder="Your Name"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !displayNameValid }
              helperText={ displayNameValid }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.es"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2}} >
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                type="submit"
                variant="contained"
                fullWidth>
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr:1 }}>Already have an account?</Typography>
            <Link component={ RouterLink } color='inherit' to='/auth/login'>
            Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
