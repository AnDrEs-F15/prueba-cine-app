import { instanceAxios } from "../config/instanceAxios"

export const getAllRoom = () => {
    return instanceAxios.get('/room')
        .then(response => response )
}
export const getAllSchedule = () => {
    return instanceAxios.get('/schedule')
        .then(response => response )
}

export const getByMovieId = (id) => {
    return instanceAxios
                .get('/movies/'+id)
                .then((response => response ))
}