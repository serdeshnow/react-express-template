import mongoose from 'mongoose';

const NoteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

export const Note = mongoose.model('Note', NoteSchema);
