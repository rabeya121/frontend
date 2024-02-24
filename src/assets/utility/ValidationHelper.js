class ValidationHelper {
  static IsLater(value) {
    let OnlyLaterRegx =
      /^[A-Za-z\'\s\.\,\-\!\@\#\$\%\^\&\*\(\)\[\]\{\}\:\;\"\<\>\?\/\+\=\_\\\|`\~]+$/;
    return OnlyLaterRegx.test(value);
  }
  static IsPassword(value) {
    let password =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return password.test(value);
  }
  static IsEmail(value) {
    let EmailRegx = /\S+@\S+\.\S+/;
    return EmailRegx.test(value);
  }
  static IsMobile(value) {
    let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    return MobileRegx.test(value);
  }
  static IsUrl(value) {
    let ImageUrl = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
    return ImageUrl.test(value);
  }
  static IsNumber(value) {
    let OnlyNumberRegx = /^\d+(\.\d+)?$/;
    return OnlyNumberRegx.test(value);
  }
  static IsNull(value) {
    return value == null;
  }
  static IsEmpty(value) {
    return value.length === 0;
  }
}
export default ValidationHelper;
