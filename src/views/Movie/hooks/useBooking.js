import { useEffect, useState } from "react"
import { getAllRoom, getAllSchedule } from "../../../services/appServices";

export const useBooking = () => {

    const [room,setRoom] = useState([]);
    const [schedule, setSchedule] = useState([]);
    const [scheduleData, setScheduleData] = useState({
        id:"",
        movie:"",
        room:"",
        schedule:""
    });



    const bookingInput = [
        {
            name: "id",
            label: "Cedula",
            type: "text",
            fullWidth: "span 2",
            autoFocus: true
        },
        {
            name: "movie",
            label: "Pelicula",
            fullWidth: "span 2",
            type: "text"
        },
    ]
    useEffect(()=> {
        getAllRoom().then(response => setRoom(response?.data))
        getAllSchedule().then(response => setSchedule(response?.data) )
    }, [] )

    const handleChange = (e) => {
        const {name,value} = e.target;
        setScheduleData({
            ...scheduleData,
            [name]:value
        })
    };
    return {
        bookingInput,
        room,
        schedule,
        handleChange,
        scheduleData
    }
}