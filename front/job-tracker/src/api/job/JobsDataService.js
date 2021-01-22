import Axios from "axios"
import { JPA_API_URL } from "../../Constants";

class JobsDataService {    
    retrieveAllJobs(name){
        //console.log('executed service')
        return Axios.get(`${JPA_API_URL}/users/${name}/jobs`)
    }  

    retrieveJob(name,id){
        //console.log('executed service')
        return Axios.get(`${JPA_API_URL}/users/${name}/jobs/${id}`)
    }
    
    deleteJob(name, id){
        //console.log('executed service')
        return Axios.delete(`${JPA_API_URL}/users/${name}/jobs/${id}`)
    }

    updateJob(name, id, job){
        //console.log('executed service')
        return Axios.put(`${JPA_API_URL}/users/${name}/jobs/${id}`, job)
    }

    createJob(name, job){
        //console.log('executed service')
        return Axios.post(`${JPA_API_URL}/users/${name}/jobs`, job)
    }

}

export default new JobsDataService()


