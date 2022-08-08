if(process.argv[3] && process.argv[4]){

    switch (process.argv[2]) {

        case "add":
            console.log(`${Number(process.argv[3]) + Number(process.argv[4])}`)
            break;

        case "sub":
            console.log(`${Number(process.argv[3]) - Number(process.argv[4])}`)
            break;

        case "mult":
            console.log(`${Number(process.argv[3]) * Number(process.argv[4])}`)
            break;

        case "div":
            console.log(`${Number(process.argv[3]) / Number(process.argv[4])}`)
            break;
    
        default:
            console.log("Escolha uma operação e declare 2 valores.")
            break;
    }
    } else {
        console.log("Passe dois valores")
       
    }