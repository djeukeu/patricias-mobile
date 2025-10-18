import React, { useEffect, useState } from 'react';

import { WebView } from 'react-native-webview';

const Web = (props) => {
  const { uri } = props.route.params;
  const [title, setTitle] = useState('Loading...');

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: title,
    });
  }, [props.navigation, title]);

  return (
    <WebView
      source={{ uri }}
      autoManageStatusBarEnabled={false}
      setBuiltInZoomControls={true}
      onNavigationStateChange={(navState) => {
        setTitle(navState.title);
      }}
    />
  );
};

export default Web;
