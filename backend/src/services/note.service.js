import { Note } from '../models/note.model.js';
import logger from '../utils/logger.js';

/**
 * Создает новую заметку
 * @param {Object} noteData - Данные заметки (title, content, owner)
 * @returns {Promise<Object>} - Созданная заметка
 */
export const createNote = async ({title, owner}) => {
  const note = new Note({title, owner});
  return await Note.create(note);
}


/**
 * Возвращает все заметки для пользователя
 * @param {String} owner - Идентификатор пользователя
 * @returns {Promise<Array>} - Массив заметок
 */
export const getNotes = async ({ owner }) => {
  return Note.find({owner});
}

/**
 * Обновляет заметку по owner
 * @param {String} owner - Идентификатор пользователя
 * @param {Object} editData - Обновленные данные
 * @returns {Promise<Object>} - Обновленная заметка
 */
export const editNote = async ( owner, editData) => {
  const editedNote = await Note.findOneAndUpdate({_id: editData.id, owner}, editData,  { new: true });
  
  if(!editedNote) {
    throw new Error('No note to edit');
  }
  
  logger.info('edited note with ID:', editData.id);
  logger.info('New note title:', editData.title);
  return editedNote;
}

/**
 * Удаляет заметку по id
 * @param {String} owner - Идентификатор пользователя
 * @param {String} noteId - Идентификатор заметки
 * @returns {Promise<Object>} - Удаленная заметка
 */
export const deleteNote = async (owner, noteId) => {
  await Note.deleteOne({ _id: noteId, owner });
};

