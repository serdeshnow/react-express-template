import mongoose from 'mongoose';

export interface INote extends Document{
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  owner: string;
}

const NoteSchema = new mongoose.Schema({
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
