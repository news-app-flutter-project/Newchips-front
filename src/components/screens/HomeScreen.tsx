import React from 'react';
import HomeTemplate from '@components/templates/HomeTemplate';
import HeaderComponent from '@components/organisms/HeaderComponent';
import NavigateComponent from '@components/organisms/NavigateComponent';
function HomeScreen({navigation}: any): JSX.Element {
  return (
    <>
      <HeaderComponent />
      <HomeTemplate />
      <NavigateComponent navigation={navigation} />
    </>
  );
}

export default HomeScreen;
