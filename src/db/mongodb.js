import mongoose from "mongoose";

const URL = 'mongodb+srv://developer:EAj3BpBDtHz7GQbE@cluster0.y6phdph.mongodb.net/?retryWrites=true&w=majority'

//EAj3BpBDtHz7GQbE

export const init = async () => {
    try{
        await mongoose.connect(URL)
        console.log ('db conectada')  
    }
    catch(error){
        console.error('Ha ocurrido un error al conectarse a MongoDB');
    }   
}

