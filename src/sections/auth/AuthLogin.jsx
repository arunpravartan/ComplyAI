'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';

// @mui
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @third-party
import { useForm } from 'react-hook-form';

// @project
import { APP_DEFAULT_PATH, AUTH_USER_KEY } from '@/config';
import axios from '@/utils/axios';
import { emailSchema, passwordSchema } from '@/utils/validationSchema';

// @icons
import { IconEye, IconEyeOff } from '@tabler/icons-react';

// Mock user credentials
const userCredentials = [
  { title: 'Super Admin', email: 'super_admin@saasable.io', password: 'Super@123' },
  { title: 'Admin', email: 'admin@saasable.io', password: 'Admin@123' },
  { title: 'User', email: 'user@saasable.io', password: 'User@123' }
];

/***************************  AUTH - LOGIN  ***************************/

export default function AuthLogin({ inputSx }) {
  const router = useRouter();
  const theme = useTheme();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ defaultValues: { email: 'super_admin@saasable.io', password: 'Super@123' } });

  // Handle form submission
  const onSubmit = (formData) => {
    setIsProcessing(true);
    setLoginError('');

    axios
      .post('/api/auth/login', formData)
      .then((response) => {
        setIsProcessing(false);
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(response.data));
        router.push(APP_DEFAULT_PATH);
      })
      .catch((response) => {
        setIsProcessing(false);
        setLoginError(response.error || 'Something went wrong');
      });
  };

  const commonIconProps = { size: 16, color: theme.palette.grey[700] };

  return (
    <>
      <Stack direction="row" sx={{ gap: 1, mb: 2 }}></Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <Box>
            <OutlinedInput
              {...register('email', emailSchema)}
              placeholder="Email Id"
              fullWidth
              error={Boolean(errors.email)}
              sx={inputSx}
            />
            {errors.email?.message && <FormHelperText error>{errors.email.message}</FormHelperText>}
          </Box>

          <Box>
            <OutlinedInput
              {...register('password', passwordSchema)}
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              fullWidth
              error={Boolean(errors.password)}
              // endAdornment={
              //   <InputAdornment
              //     position="end"
              //     sx={{ cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}
              //     onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              //   >
              //     {isPasswordVisible ? <IconEye {...commonIconProps} /> : <IconEyeOff {...commonIconProps} />}
              //   </InputAdornment>
              // }
              sx={{inputSx, bgColor : '#ebebeb'}}
            />
          </Box>
        </Stack>
        <Box sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'// Optional: Ensures vertical centering on full screen
        }}>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            disabled={isProcessing}
            endIcon={isProcessing && <CircularProgress color="secondary" size={16} />}
            sx={{ minWidth: 120, mt: { xs: 1, sm: 4 }, '& .MuiButton-endIcon': { ml: 1 } }}
          >
            Sign In
          </Button>
        </Box>
        {loginError && (
          <Alert sx={{ mt: 2 }} severity="error" variant="filled" icon={false}>
            {loginError}
          </Alert>
        )}
      </form>
    </>
  );
}

AuthLogin.propTypes = { inputSx: PropTypes.any };
