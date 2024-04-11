

enum ImageConstants {
    attendance = require('../assets/images/attendance.png'),
    leaves = require('../assets/images/leaves.png'),
    claims = require('../assets/images/claims.png'),
    payslip = require('../assets/images/payslip.png'),
    tax = require('../assets/images/tax.png'),
    hrMemo = require('../assets/images/hrMemo.png'),
    policy = require('../assets/images/policy.png'),
    booking = require('../assets/images/booking.png'),
    more = require('../assets/images/more.png'),
    
}

// Define type guard function to check if a string is a key of the enum
function isImageConstant(key: string): key is keyof typeof ImageConstants {
    return key in ImageConstants;
}

// Define function to get image value by key
export function getImageValueByKey(key: string): ImageConstants {
    if (isImageConstant(key)) {
       const result = ImageConstants[key]
       return result
    } else {
        return ImageConstants.attendance ; // Return undefined if key is not found
    }
}
export default ImageConstants;