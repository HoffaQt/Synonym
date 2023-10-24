import { Synonym } from '../models/synonym.model';

class SynonymRepository {
  private static instance: SynonymRepository;
  private keySets: Set<number>[];
  private idGenerator: number;
  private synonymMap: Map<Set<number>, Set<Synonym>>;
  
  private constructor() {
    this.synonymMap = new Map<Set<number>, Set<Synonym>>;
    this.keySets = [];
    this.idGenerator = 0;
  }
  
  public getSynonymsForWord(keyValue: number): Set<Synonym> | null {
    this.keySets.forEach((key) => {
      if (key.has(keyValue)) return this.synonymMap.get(key);
    });
    return null;
  }
  
  public findSynonymSetKey(searchValue: string): Set<number> | null {
    this.synonymMap.forEach((synonymSet, key) => {
      synonymSet.forEach((synonym) => {
        if (synonym.word === searchValue) return key;
      });
    });
    return null;
  }
  
  private updateMapKey(oldKey: Set<number>, newKey: Set<number>): Set<number> | void {
    this.synonymMap.forEach((synonymSet, key) => {
      if (key === oldKey) { 
        key = newKey;
        return newKey;
      }
    });
    return;
  }
  
  public addSynonym(keyValue: number = 0, newSynonymWord: string): number {
    let newSynonym: Synonym = { id: this.idGenerator++, word: newSynonymWord};
    
    this.keySets.forEach((keySet) => {
      if (keySet.has(keyValue)) {
        let newKey = new Set(keySet).add(newSynonym.id);
        
        let newSynonymSet: Set<Synonym> = this.synonymMap.get(keySet)?.add(newSynonym)!;
        this.synonymMap.set(keySet, newSynonymSet);
        
        this.updateMapKey(keySet, newKey);
        
        keySet = newKey;
        return 201;
      }
    });
    //if no keySet with keyValue exists, create a new one
    let newKeySet = new Set([keyValue]);
    this.keySets.push(newKeySet);
    this.synonymMap.set(newKeySet, new Set([newSynonym]));
    return 201;
  }
  
  public static getInstance(): SynonymRepository {
    if (!SynonymRepository.instance) {
      SynonymRepository.instance = new SynonymRepository();
    }
    
    return SynonymRepository.instance;
  }
  
}

export default SynonymRepository;