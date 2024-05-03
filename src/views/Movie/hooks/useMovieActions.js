import { useState } from "react";
import Swal from "sweetalert2";

export const useMovieAction = () => {
    const [open,setOpen] = useState(false);

    const InputFieldAlert = () => {
        Swal.fire({
            title: "Por favor ingrese su numero de documento",
            input: "number",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            confirmButtonColor: '#00599C',
            showLoaderOnConfirm: true,
            /* preConfirm: async (formData) => handleAddSystemManager(formData)  , */
          })
    }

    return {
        open,
        setOpen,
        InputFieldAlert
    }
}