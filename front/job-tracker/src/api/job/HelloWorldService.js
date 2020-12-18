import Axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        return Axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService(){
        return Axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        //console.log('executed service')
        // let username = 'asmithjr'
        // let password = 'dummy'

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