import mongoose from 'mongoose'

const aplicatorsSchema = mongoose.Schema({
    id_collaborator: {
        type: String,
        requerid: false,
      },
      id_categorie: {
        type: String,
        requerid: false,
      },
      status: {
        type: String,
        requerid: false,
      }
});

export default mongoose.model('Aplicator', aplicatorsSchema)