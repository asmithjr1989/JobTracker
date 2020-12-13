import Axios from "axios"

class JobsDataService {    
    
    retrieveAllJobs(name){
        return Axios.get(`http://localhost:8080/users/${name}/jobs`)
    }  

    retrieveJob(name,id){
        return Axios.get(`http://localhost:8080/users/${name}/jobs/${id}`)
    }
    
    deleteJob(name, id){
        return Axios.delete(`http://localhost:8080/users/${name}/jobs/${id}`)
    }

    updateJob(name, id, job){
        return Axios.put(`http://localhost:8080/users/${name}/jobs/${id}`, job)
    }

    createJob(name, job){
        return Axios.post(`http://localhost:8080/users/${name}/jobs`)
    }

}

export default new JobsDataService()


