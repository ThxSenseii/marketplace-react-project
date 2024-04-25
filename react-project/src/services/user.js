import api from "./config";

export const getOneUser = async (userId) => {
    const { data } = await api.get(`/user/${userId}`, { 
        headers: {
            authorization: localStorage.token
        }
    })

    return data
}