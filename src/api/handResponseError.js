export default res =>{
    let str = "";
    switch (res.data.status) {
        case '-100':
                str = "餘額不足";
            break;
        case '-101':
                str = "照片太小";
            break;
        case '-102':
                str = "目前尚未收到";
            break;
        default:
            str = "通用錯誤";
            break;
    }
    alert(str);
}