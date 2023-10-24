import { Router, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { Synonym } from '../models/synonym.model';
import { createSynonym, getSynonyms, getSynonymbyWord, updateSynonym, deleteSynonym } from '../controllers/synonym.controller';

const router = Router();

const synonymWordValidationRules = [
  body('id').optional().isInt(),
  body('word').notEmpty().isString().isLength({ min: 0, max: 45 })
];

router.post('/', synonymWordValidationRules ,(req: Request, res: Response) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  createSynonym(req, res);
});

router.get('/', getSynonyms);

router.get('/:word', synonymWordValidationRules,(req: Request, res: Response) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  getSynonymbyWord(req, res);
});

router.put('/:word', synonymWordValidationRules, (req: Request, res: Response) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  updateSynonym(req, res);
});

router.delete('/:id', synonymWordValidationRules, (req: Request, res: Response) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  deleteSynonym(req, res);
});

export default router;