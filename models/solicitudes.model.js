import mongoose from 'mongoose'

const solicitudesSchema = mongoose.Schema({
    id_collaborator: String,
    id_categorie: String,
    status: String
});

export default mongoose.model('Solicitud', solicitudesSchema)