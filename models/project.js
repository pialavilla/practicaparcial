const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: { type: String, required: true },
    description: String,
    startDate: { type: Date, required: true },
    estimatedEndDate: Date,
    status: { type: String, enum: ['propuesta', 'en curso', 'finalizado'], default: 'propuesta' },
    researchers: [{ type: Schema.Types.ObjectId, ref: 'Researcher' }],
});

module.exports = mongoose.model('Project', projectSchema);
