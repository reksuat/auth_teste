import mongoose from "mongoose";

const connectDB = async() => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_ADDRESS}/${process.env.DB_NAME}`
          );

        // await mongoose.connect('mongodb+srv://Edson:ezZ92XfwQyPQkYHi@cluster0.th8hv.mongodb.net/autenticacao');    
        // console.log('MongoDB conectado');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB', error);

    }
};

connectDB();

export default mongoose;