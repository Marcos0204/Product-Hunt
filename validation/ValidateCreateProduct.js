export default function ValidateCreateProduct(values) {

    let errors = {};

    // Validar el nombre del usuario
    if(!values.name) {
        errors.name = "El Nombre es obligatorio";
    }

    // Validar el nombre del usuario
    if(!values.company) {
        errors.company = "El Nombre da la empresa obligatorio";
    }

    // // Validar el nombre del usuario
    // if(!values.caompany) {
    //     errors.caompany = "El Nombre da la empresa obligatorio";
    // }

     // Validar el nombre del usuario
     if(!values.url) {
        errors.url = "El Nombre da la url obligatorio";
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)){
        errors.url = "foramto de la url no valida";
    }

    if(!values.description) {
        errors.description = "Agrega una description a tu producto";
    }

    return errors;
}