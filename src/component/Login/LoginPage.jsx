import React from 'react';
import GoogleButton from './GoggleButton';
import AppleButton from './AppleButton';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import ContinueButton from './ContinueButton';
import styles from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuthContext';
function LoginPage() {
  // const { user, setUserName } = useAuth();
  const navigate = useNavigate();
  const handleContinue = (e) => {
    e.preventDefault(); 
    // setUserName(user.name);
    navigate('/dashboard');
  };
  return (
    <main className={styles.loginPage}>
      <section className={styles.loginContainer}>
        <header>
          <h1 className={styles.title}>ComplyAI</h1>
          <p className={styles.subtitle}>AI Agent for SOP validation, knowledge search, and predictive analytics</p>
        </header>
        <p className={styles.signInPrompt}>Sign in or sign up to continue</p>
        <GoogleButton onClick={handleContinue}/>
        <AppleButton onClick={handleContinue}/>
        <hr className={styles.divider} />
        <form className={styles.loginForm}  onSubmit={handleContinue}>
          <EmailInput />
          <PasswordInput />
          <ContinueButton/>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;