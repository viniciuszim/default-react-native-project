# Uncomment the next line to define a global platform for your project
# platform :ios, '9.0'

target 'nome_do_projeto_aqui' do
  # Uncomment the next line if you're using Swift or would like to use dynamic frameworks
  # use_frameworks!

  # Pods for nome_do_projeto_aqui

  # SE tiver instalado: yarn add react-native-firebase
  pod 'Firebase/Core', '~> 5.3.0'
  pod 'Firebase/Messaging'

  # Flexbox Layout Manager Used By React Natve
  pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

  # React Native
  pod 'React', path: '../node_modules/react-native', subspecs: [
    # Comment out any unneeded subspecs to reduce bundle size.
    'Core',
    'DevSupport',
    'RCTActionSheet',
    'RCTAnimation',
    'RCTBlob',
    'RCTCameraRoll',
    'RCTGeolocation',
    'RCTImage',
    'RCTNetwork',
    'RCTPushNotification',
    'RCTSettings',
    'RCTTest',
    'RCTText',
    'RCTVibration',
    'RCTWebSocket',
    'RCTLinkingIOS'
  ]

  pod 'RNGestureHandler', :path => '../node_modules/react-native-gesture-handler'
  pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'
  
  # Mapbox
  # SE tiver instalado: yarn add @mapbox/react-native-mapbox-gl
  #pod 'react-native-mapbox-gl', :path => '../node_modules/@mapbox/react-native-mapbox-gl'

  # SE tiver instalado: yarn add react-native-device-info
  #pod 'RNDeviceInfo', :path => '../node_modules/react-native-device-info'

  # SE tiver instalado: yarn add react-native-permissions
  #pod 'ReactNativePermissions', :path => '../node_modules/react-native-permissions'

  target 'nome_do_projeto_aquiTests' do
    inherit! :search_paths
    # Pods for testing
  end

end

post_install do |installer|
  installer.pods_project.targets.each do |target|
    if target.name == "React"
      target.remove_from_project
    end
    if target.name == 'yoga'
      target.remove_from_project
      target.build_configurations.each do |config|
          config.build_settings['GCC_TREAT_WARNINGS_AS_ERRORS'] = 'NO'
          config.build_settings['GCC_WARN_64_TO_32_BIT_CONVERSION'] = 'NO'
      end
    end
  end
end
