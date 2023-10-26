import { Request, Response } from 'express';
import SynonymRepository from '../repositories/synonym.repository';
import { jsonParser, setToArray } from '../helper/data.helper';

export default class SynonymController {

  getSynonymsByWord(req: Request, res: Response) {
    const response: Set<string> = SynonymRepository.getInstance().getSynonyms(req.params.search);

    res.status(200).json({
      message: "get OK",
      reqBody: req.body,
      data: jsonParser(response ?? new Set<string>())
    });
  }

  createSynonym(req: Request, res: Response) {
    const response: Set<string> = SynonymRepository.getInstance().addSynonym(req.params.newWord, req.params.existingWord);

    res.status(201).json({
      message: "create OK",
      reqBody: req.body,
      data: jsonParser(response ?? new Set<string>())
    });
  }

  createWord(req: Request, res: Response) {
    const response: string = SynonymRepository.getInstance().addWord(req.params.newWord);

    res.status(201).json({
      message: "create OK",
      reqBody: req.body,
      data: response
    });
  }

  updateSynonym(req: Request, res: Response) {
    const response: Set<string> = SynonymRepository.getInstance().updateSynonym(req.params.wordToBeUpdated, req.params.synonymWord);

    res.status(200).json({
      message: "update OK",
      reqBody: req.body,
      data: jsonParser(response ?? new Set<string>())
    });
  }

  deleteWord(req: Request, res: Response) {
    SynonymRepository.getInstance().deleteWord(req.params.word);

    res.status(204).json({
      message: "delete OK",
      reqBody: req.body
    });
  }
}