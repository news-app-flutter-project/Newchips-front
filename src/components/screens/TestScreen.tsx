import React from 'react';
import TestTemplate from '@components/templates/TestTemplate';
import HeaderComponent from '@components/organisms/HeaderComponent';
import NavigateComponent from '@components/organisms/NavigateComponent';
function LoginScreen({navigation}: any): JSX.Element {
  return (
    <>
      <HeaderComponent />
      <TestTemplate />
      <NavigateComponent navigation={navigation} />
    </>
  );
}

export default LoginScreen;
