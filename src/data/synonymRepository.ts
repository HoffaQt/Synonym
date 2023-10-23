import { Synonym } from '../models/synonymModel';

//class Node {
//  value: Synonym;
//  children: Node[];
//  
//  constructor(synonym: Synonym) {
//      this.value = synonym,
//      this.children = [];
//  }
//}
//class synonymTree {
//  root: Node;
//  
//  constructor() {
//    this.root = new Node({group: 0, word: ''});
//  }
//  
//  addNode(synonym: Synonym) {
//    
//    if (this.root.children.length === 0) {
//      this.root.children.push(new Node(synonym));
//      return;
//    } 
//    else {
//      for(let i = 0; i < this.root.children.length; i++) {
//        
//        if (this.root.children[i].value.group === synonym.group) {
//          this.root.children[i].children.push(new Node(synonym));
//          
//          return;
//        }
//      }
//      this.root.children.push(new Node(synonym));
//    }
//  }
//  
//}

class SynonymRepository {
  private static instance: SynonymRepository;
  private synonyms: string[] = [];
  
  private constructor() {}
  
  public static getInstance(): SynonymRepository {
    if (!SynonymRepository.instance) {
      SynonymRepository.instance = new SynonymRepository();
    }
    
    return SynonymRepository.instance;
  }
  
  
  
}

export default SynonymRepository;