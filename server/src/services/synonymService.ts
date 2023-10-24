import SynonymRepository from '../dataAccess/synonymRepository';
import Logger from '../config/logger';

const addSynonym = (keyWord: string, newSynonym: string): void => {
  let repo = SynonymRepository.getInstance();
  repo.addSynonym(keyWord, newSynonym);
}

export { addSynonym };