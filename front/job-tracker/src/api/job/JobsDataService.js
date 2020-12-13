import Axios from "axios"

class JobsDataService {    
    
    retrieveAllJobs(name){
        return Axios.get(`http://localhost:8080/users/${name}/jobs`)
    }  
    
    deleteJob(name, id){
        return Axios.delete(`http://localhost:8080/users/${name}/jobs/${id}`)
    }
}

export default new JobsDataService()


