import { Request, Response } from 'express';
import * as noteService from '../services/note.service.ts';
// import logger from '../utils/logger.ts';


export const createNoteController = async (req: Request, res: Response) => {
  try {
    const note = await noteService.createNote(req.body);
    // logger.info(`Created note with id ${note.id}`);
    res.status(201).json(note);
  } catch (e: any) {
    res.status(400).json({ error: e.message });
  }
};

export const getNotesController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const notes = await noteService.getNotes({ owner: userId });
    res.status(200).json(notes);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const updateNoteController = async (req: Request, res: Response) => {
  try {
    const { noteId } = req.params;
    const note = await noteService.editNote(noteId, req.body);
    res.status(200).json(note);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};

export const deleteNoteController = async (req: Request, res: Response) => {
  try {
    const { owner, noteId } = req.params;
    await noteService.deleteNote(owner, noteId);
    res.status(200).json({ message: 'Заметка удалена' });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
};
