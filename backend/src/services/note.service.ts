import { type INote, Note } from '../models/note.model.ts';
import logger from '../utils/logger.ts';

/**
 * Создает новую заметку
 * @param {INote} noteData - Данные заметки (title, content, owner)
 * @returns {Promise<INote>} - Созданная заметка
 */
export const createNote = async ({ title, owner }: {title: string, owner: string}): Promise<object> => {
  const note = new Note({ title, owner });
  return await Note.create(note);
};

/**
 * Возвращает все заметки для пользователя
 * @param {String} owner - Идентификатор пользователя
 * @returns {Promise<Array>} - Массив заметок
 */
export const getNotes = async ({ owner }: {owner: string}): Promise<Array<INote>> => {
  return Note.find({ owner });
};

/**
 * Обновляет заметку по owner
 * @param {String} owner - Идентификатор пользователя
 * @param {Object} editData - Обновленные данные
 * @returns {Promise<INote>} - Обновленная заметка
 */
export const editNote = async (owner: string, editData: Partial<INote>): Promise<object> => {
  const editedNote = await Note.findOneAndUpdate({ _id: editData._id, owner }, editData, {
    new: true,
  });

  if (!editedNote) {
    throw new Error('No note to edit');
  }

  logger.info('edited note with ID:', editData._id);
  logger.info('New note title:', editData.title);
  return editedNote;
};

/**
 * Удаляет заметку по id
 * @param {String} owner - Идентификатор пользователя
 * @param {String} noteId - Идентификатор заметки
 * @returns {Promise<Object>} - Удаленная заметка
 */
export const deleteNote = async (owner: string, noteId: string): Promise<void> => {
  await Note.deleteOne({ _id: noteId, owner });
};
