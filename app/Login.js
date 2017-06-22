import React from 'react';
import { View, Text } from 'react-native';
import { Colors, Images, Girds, Fonts } from './styles/settings/'
import BackgroundImage from './styles/elements/BackgroundImage'
import ButtonLogin from './styles/elements/ButtonLogin'

export default class BlackFade extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <BackgroundImage
          sourceBackgroundImage={Images.loginBg}
          styles={{ ...Girds.horizontalCenterEnd, padding: 15 }}
        >
          <ButtonLogin
            text={'Đăng nhập bằng Facebook'}
            styles={{ backgroundColor: `${Colors.primitiveColor.colorBlue}` }}
          />
          <ButtonLogin
            text={'Đăng nhập bằng Google+'}
            styles={{ backgroundColor: `${Colors.primitiveColor.colorOrange}` }}
          />
          <Text
            style={{
              color: Colors.primitiveColor.colorWhite,
              fontSize: Fonts.size.medium,
              marginTop: 10
            }}
          >
            Nhấp đăng nhập là bạn đã đồng ý với
          </Text>
          <Text
            style={{
              color: Colors.defaultColor.colorPrimary,
              fontSize: Fonts.size.medium,
              marginBottom: 10
            }}
          >
            điều khoản sử dụng
          </Text>
        </BackgroundImage>
      </View>
    );
  }
}
