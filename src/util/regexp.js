/* eslint-disable camelcase */
/**
 * Created by lxhfight on 2017/7/13.
 * Email:
 * Description:
 *    正则工具
 */
export const isCarNumber = (car_number) => {
    if (typeof car_number !== 'string') {
        return false
    }
    let regExp = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z]{1}[A-Za-z]{1}(([0-9]{5}[DFdf])|([DFdf]([A-HJ-NP-Za-hj-np-z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Za-z]{1}[A-Za-z]{1}[A-HJ-NP-Za-hj-np-z0-9]{4}[A-HJ-NP-Za-hj-np-z0-9挂学警港澳]{1})$/
    return regExp.test(car_number)
}
export const isPhoneNumber = (phone) => {
    let regExp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/
    return regExp.test(phone)
}
