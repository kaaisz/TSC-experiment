let defintelyNotAString: any = 'I am a string';

// casting value with surrounding by ()
let strLength = (defintelyNotAString as string).length;
// or this way:
// let strLength = (<string> defintelyNotAString).length;