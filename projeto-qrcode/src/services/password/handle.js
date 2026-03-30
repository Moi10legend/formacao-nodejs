export default async function handle(){
    let characters = [];
    let password = "";
    const passwordLength = process.env.PASSWORD_LENGTH

    if(process.env.UPPERCASE_LETTERS === "true"){
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    if(process.env.LOWERCASE_LETTERS === "true"){
        characters.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if(process.env.NUMBERS === "true"){
        characters.push(..."1234567890");
    }

    if(process.env.SPECIAL_CHARACTERS === "true"){
        characters.push(..."!@#$%^&*()-_");
    }

    for(let i = 0; i < passwordLength; i+=1){
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}