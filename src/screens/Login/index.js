import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {emailRegex} from '../../common/constants';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [credentialError, setCredentialError] = useState("");

  const emailValidation = () => {
    if (!emailRegex.test(email)) {
      setEmailError('Enter a valid email address');
      return false;
    } else {
      setEmailError('');
      return true;
    }
  };

  const credentailsHandler = () => {
    if (email !== 'test@mail.com' || password !== 'test-password') {
      return false;
    }
    return true;
  };

  const loginSubmitHandler = () => {
    if (emailValidation()) {
      if (credentailsHandler()) {
        setCredentialError('');
        navigation.replace('Products');
      } else {
        setCredentialError('Invalid credentials entered');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={email}
          placeholder="Email"
          placeholderTextColor="#003F5C"
          onChangeText={email => setEmail(email)}
          onBlur={emailValidation}
        />
      </View>

      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          value={password}
          placeholder="Password"
          placeholderTextColor="#003F5C"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity onPress={loginSubmitHandler} style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      {credentialError ? (
        <Text style={styles.errorText}>{credentialError}</Text>
      ) : null}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 20,
    backgroundColor: '#FF1493',
  },
  loginText: {
    color: '#FFF',
  },
  errorText: {
    color: '#F00',
    marginBottom: 20,
  },
});
