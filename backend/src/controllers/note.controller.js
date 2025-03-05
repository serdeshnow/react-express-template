// import chalk from 'chalk';
// import { Note } from '../models/note.model.js';
import * as noteService from '../services/note.service.js';
import logger from '../utils/logger.js';

// export async function createNoteController(title, owner) {
//   await Note.create({ title: title, owner: owner });
//   console.log(chalk.green(`New note with title "${title}" has been added!`));
// }

export const createNoteController = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body);
    logger.info(`Created note with id ${note.id}`);
    res.status(201).json(note);
  } catch (e) {
    res.status(400).json({error: e.message});
  }
}


// export async function getNotesController() {
//   await Note.find();
// }

export const getNotesController = async (req, res) => {
  try {
    const { userId } = req.params;
    const notes = await noteService.getNotes(userId);
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


// export async function editNoteController(noteData, owner) {
//   const result = await Note.updateOne(
//     { _id: noteData.id, owner },
//     { title: noteData.title },
//   );
//   // console.log(result);
//   if (result.matchedCount === 0) {
//     throw new Error('No note to edit');
//   }
//
//   console.log(chalk.yellowBright('edited note with ID:', noteData.id));
//   console.log(chalk.yellowBright('New note title:', noteData.title));
// }

export const updateNoteController = async (req, res) => {
  try {
    const { noteId } = req.params;
    const note = await noteService.editNote(noteId, req.body);
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// export async function removeNote(id, owner) {
//   const result = await Note.deleteOne({ _id: id, owner });
//
//   if (result.matchedCount === 0) {
//     throw new Error('No note to delete');
//   }
//
//   console.log(chalk.redBright('removed note with ID:', id));
// }

export const deleteNoteController = async (req, res) => {
  try {
    const { noteId } = req.params;
    await noteService.deleteNote(noteId);
    res.status(200).json({ message: 'Заметка удалена' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};