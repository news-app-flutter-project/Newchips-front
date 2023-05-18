import React from 'react';
import LoginTemplate from '@components/templates/LoginTemplate';
import HeaderComponent from '@components/organisms/HeaderComponent';
import NavigateComponent from '@components/organisms/NavigateComponent';
function LoginScreen({navigation}: any): JSX.Element {
  return (
    <>
      <LoginTemplate />
      {/* <NavigateComponent navigation={navigation} /> */}
    </>
  );
}

export default LoginScreen;
