import { createNoteController, getNotesController, updateNoteController, deleteNoteController } from '../controllers/note.controller.js';
import { Router } from 'express';

export const noteRoutes = Router();

noteRoutes.post('/', createNoteController);
noteRoutes.get('/:userId', getNotesController);
noteRoutes.get('/:noteId', updateNoteController);
noteRoutes.get('/:noteId', deleteNoteController);