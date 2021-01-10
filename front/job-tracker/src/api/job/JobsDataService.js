import Axios from "axios"
import { API_URL } from "../../Constants";

class JobsDataService {    
    retrieveAllJobs(name){
        //console.log('executed service')
        return Axios.get(`${API_URL}/users/${name}/jobs`)
    }  

    retrieveJob(name,id){
        //console.log('executed service')
        return Axios.get(`${API_URL}/users/${name}/jobs/${id}`)
    }
    
    deleteJob(name, id){
        //console.log('executed service')
        return Axios.delete(`${API_URL}/users/${name}/jobs/${id}`)
    }

    updateJob(name, id, job){
        //console.log('executed service')
        return Axios.put(`${API_URL}/users/${name}/jobs/${id}`, job)
    }

    createJob(name, job){
        //console.log('executed service')
        return Axios.post(`${API_URL}/users/${name}/jobs`, job)
    }

}

export default new JobsDataService()


