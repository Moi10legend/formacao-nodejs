import handle from "./handle.js"

async function createPassword(){
    const password = await handle();
    console.log(password)
}

export default createPassword;