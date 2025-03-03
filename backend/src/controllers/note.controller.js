import chalk from 'chalk';
import { Note } from '../models/note.model.js';

export async function addNote(title, owner) {
  await Note.create({ title: title, owner: owner });
  console.log(chalk.green(`New note with title "${title}" has been added!`));
}

export async function getNotes() {
  await Note.find();
}

export async function removeNote(id, owner) {
  const result = await Note.deleteOne({ _id: id, owner });

  if (result.matchedCount === 0) {
    throw new Error('No note to delete');
  }

  console.log(chalk.redBright('removed note with ID:', id));
}

export async function editNote(noteData, owner) {
  const result = await Note.updateOne(
    { _id: noteData.id, owner },
    { title: noteData.title },
  );
  // console.log(result);
  if (result.matchedCount === 0) {
    throw new Error('No note to edit');
  }

  console.log(chalk.yellowBright('edited note with ID:', noteData.id));
  console.log(chalk.yellowBright('New note title:', noteData.title));
}
