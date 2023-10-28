import Logger from '../utils/logger.util';

class SynonymRepository {
  private static instance: SynonymRepository;
  private synonymMap: Map<string, Set<string>>;

  private constructor() {
    this.synonymMap = new Map<string, Set<string>>();
  }

  public static getInstance(): SynonymRepository {
    if (!this.instance) this.instance = new SynonymRepository();
    return this.instance;
  }

  public addWord = (newWord: string): string => {
    if (this.synonymMap.has(newWord)) throw new Error(newWord + ' already exists!');

    this.synonymMap.set(newWord, new Set<string>().add(newWord));
    return newWord;
  };

  public getAllWords = (): Set<string> => {
    return new Set<string>(this.synonymMap.keys());
  };

  public createSynonym = (newWord: string, existingWord: string): Set<string> => {
    if (!this.synonymMap.has(existingWord)) throw new Error('Server error!');
    if (this.synonymMap.has(newWord)) throw new Error(newWord + ' already exists!');

    let existingSynonymSet = this.synonymMap.get(existingWord);

    if (existingSynonymSet) {
      this.synonymMap.set(newWord, existingSynonymSet);
      existingSynonymSet.add(newWord);

      if (process.env.NODE_ENV === 'development') {
        this.synonymMap.get(existingWord)?.has(newWord)
          ? Logger.getInstance().logger.debug('newWord is in the set')
          : Logger.getInstance().logger.debug('newWord is NOT in the set');
        if (this.synonymMap.get(existingWord) === this.synonymMap.get(newWord))
          Logger.getInstance().logger.debug('They have the same reference');
      }

      return existingSynonymSet;
    } else {
      let newSynonymSet = new Set<string>().add(existingWord).add(newWord);
      this.synonymMap.set(existingWord, newSynonymSet);
      this.synonymMap.set(newWord, newSynonymSet);

      if (process.env.NODE_ENV === 'development') {
        Logger.getInstance().logger.debug('synonymMap entries: ' + this.synonymMap.size);
        if (this.synonymMap.get(existingWord) === this.synonymMap.get(newWord))
          Logger.getInstance().logger.debug('They have the same reference');
      }

      return newSynonymSet;
    }
  };

  public getSynonyms = (word: string): Set<string> => {
    if (!this.synonymMap.has(word)) throw new Error(`${word} not found`);
    return this.synonymMap.get(word)!;
  };

  public updateSynonym = (wordToBeUpdated: string, synonymWord: string): Set<string> => {
    if (!this.synonymMap.has(wordToBeUpdated)) throw new Error(wordToBeUpdated + ' not found');
    if (synonymWord === '') {
    } // Allow empty synonymWord
    else if (!this.synonymMap.has(synonymWord)) throw new Error(synonymWord + ' not found');

    let newSynonymSet: Set<string>;
    this.synonymMap.delete(wordToBeUpdated);

    if (synonymWord === '') {
      this.synonymMap.set(wordToBeUpdated, new Set<string>().add(wordToBeUpdated));
      newSynonymSet = this.synonymMap.get(wordToBeUpdated)!;
    } else {
      newSynonymSet = this.synonymMap.get(synonymWord)!;
      this.synonymMap.set(wordToBeUpdated, newSynonymSet);
    }

    return newSynonymSet;
  };

  public deleteWord = (word: string): void => {
    if (this.synonymMap.delete(word)) {
      if (process.env.NODE_ENV === 'development') Logger.getInstance().logger.debug(word + ' was deleted');
      return;
    } else {
      throw new Error(word + ' was not found');
    }
  };
}

export default SynonymRepository;
