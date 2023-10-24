import { Request, Response } from 'express';
import SynonymRepository from '../repositories/synonym.repository';
import Logger from '../config/logger';

const addSynonym = (req: Request, res: Response): Response => {
  res.statusCode = SynonymRepository.getInstance().addSynonym(req.body.id, req.body.word);
  return res;
}

export { addSynonym };