import {NativeModules} from 'react-native';

var RNImmediatePhoneCall = {
  immediatePhoneCall: function(number, slot) {
        NativeModules.RNImmediatePhoneCall.immediatePhoneCall(number, slot);
  }
};

export default RNImmediatePhoneCall;
