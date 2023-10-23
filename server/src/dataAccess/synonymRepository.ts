import { Synonym } from '../models/synonymModel';

class SynonymHashmap {
  
  
  
}

class SynonymRepository {
  private static instance: SynonymRepository;
  private keySetArr: Set<string>[];
  private synonymMap: Map<Set<String>, Set<String>>;
  
  private constructor() {
    this.synonymMap = new Map<Set<String>, Set<String>>;
    this.keySetArr = [];
  }
  
  public addSynonym(keyWord: string, newSynonym: string) {
    this.keySetArr.forEach((key) => {
      if (key.has(keyWord)) {
        //Update key and value
        this.synonymMap.set(key, { ...key.add(newSynonym), ...key });
        return;
      }
    });
    let newKeySet = new Set([keyWord, newSynonym]);
    this.keySetArr.push(newKeySet);
    this.synonymMap.set(newKeySet, newKeySet);
  }
  
  
  
  public static getInstance(): SynonymRepository {
    if (!SynonymRepository.instance) {
      SynonymRepository.instance = new SynonymRepository();
    }
    
    return SynonymRepository.instance;
  }
  
}

export default SynonymRepository;