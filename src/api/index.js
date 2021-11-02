import ajax from './ajax'
export const reqAddress = (geohash)=>ajax(`/position/${geohash}`) 
export const reqFoodTypes = ()=>ajax('/index_category')
export const reqShops = (longitude,latitude)=>ajax('/shops',{longitude,latitude})
export const reqShoplist = (geohash,keyword)=>ajax('/search_shops',{geohash,keyword})
export const reqcaptcha = ()=>ajax('/captcha')
export const reqlogin = (name,pwd,captcha)=>ajax('/login_pwd',POST,{name,pwd,captcha})
export const reqcode = (phone)=>ajax('/sendcode',phone)
export const reqtel = (phone,code)=>ajax('/login_sms',POST,{phone,code})
export const requserinfo = ()=>ajax('/userinfo')
export const reqcaptcha = ()=>ajax('/logout')