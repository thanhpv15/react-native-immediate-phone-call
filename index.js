import {NativeModules} from 'react-native';

var RNImmediatePhoneCall = {
  immediatePhoneCall: function(number, number) {
        NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number, number);
  }
};

export default RNImmediatePhoneCall;
