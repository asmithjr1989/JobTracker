import Axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        //console.log('executed service')
        return Axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(){
        //console.log('executed service')
        return Axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'asmithjr'
        // let password = 'icandoit'

        // let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)

        return Axios.get(`http://localhost:8080/hello-world/path-variable/${name}`)
        // , 
        //     {
        //         headers : {
        //             authorization: basicAuthHeader
        //         }
        //     }
        // );        
    //}
    }

}

export default new HelloWorldService()