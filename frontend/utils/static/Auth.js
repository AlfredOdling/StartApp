import { google, facebook, twitter, tumblr } from 'react-native-simple-auth'

export async function login(type, email, password) {
  
  if(type === 'google') {
    return await google({
      appId: '123-123abc.apps.googleusercontent.com',
      callback: 'com.reactnativesimpleauthexample:/oauth2redirect',
    }).then((info) => {
      // info.user - user details from the provider
      // info.credentials - tokens from the provider
    }).catch((error) => {
      // error.code
      // error.description
    })
  } else if (type === 'facebook') {
    return 'other'
  }
}
