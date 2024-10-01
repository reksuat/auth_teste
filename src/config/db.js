import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(`mongodb+srv://reksuat:pJqMvPVL2PP5ZlVA@cluster0.tou9m.mongodb.net/teste`);

    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;