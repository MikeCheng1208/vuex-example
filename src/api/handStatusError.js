export default error =>{
    switch (error.response.status) {
        case 403:
            break;
        case 404:
            break;
        default:
            break;
    }
    alert(error.response.errorMassage);
}