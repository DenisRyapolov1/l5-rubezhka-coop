import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpValidator();
  }

  user() {
    return new UserValidator();
  }
}

export default Validator;

const v = new Validator();

const postalCodeSchema = v.postalCode();
const postalCodeSchema1 = v.postalCode();
console.log(postalCodeSchema);
postalCodeSchema.isValid('ZIP_12345'); // true
postalCodeSchema1.isValid('27.168.0.1');
console.log(postalCodeSchema1);
