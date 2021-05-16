import React from 'react';
import {PermissionsAndroid} from 'react-native';
import {WebView} from 'react-native-webview';

const WebviewContainer = ({handleSetRef, handleEndLoading}) => {
  const uri = 'http://localhost:3000';

  PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Location Access Permission',
      message: 'We would like to use your location',
      buttonPositive: 'Okay',
    },
  );

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <WebView
      onLoadEnd={handleEndLoading}
      onMessage={handleOnMessage}
      ref={handleSetRef}
      source={{uri}}
      userAgent="Mozilla/5.0 (Linux; Android 11; SM-A205U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.72 Mobile Safari/537.36"
      sharedCookiesEnabled={true}
      thirdPartyCookiesEnabled={true}
      geolocationEnabled={true}
    />
  );
};

export default WebviewContainer;
