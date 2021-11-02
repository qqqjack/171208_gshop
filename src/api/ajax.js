import axios from 'axios'
export default function ajax(url='',data={},type='GET'){
    return new Promise (function(resolve,reject){
        let Promise
        if (type === 'GET'){
            let dataStr=''
            Object.keys(data).forEach(key=>{
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== ''){
                dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
                url=url + '?' + dataStr
            }
            Promise=axios.get(url)
        }else{
            Promise=axios.post(url,data)
            Promise.then(function(response){
                resolve(response.data)
            })
            .catch(function(error){
                reject(error)
            })
        }

    })
} 