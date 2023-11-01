import axios from "axios";

export default class Api {
  constructor() {
    this.client = null;
    this.baseUrl = "http://localhost:8080/api/synonyms"; // Change this to your API's base URL
  }

  init = () => {
    let headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: headers,
    });

    return this.client;
  };

  getSynonyms = (word) => {
    let response = this.init()
      .get(`/${word}`)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
    return response;
  };

  getAllWords = () => {
    let response = this.init().get(`/`);
    console.log(response); // REMOVE THIS LINE
    return response;
  };

  addWord = (word) => {
    let response = this.init()
      .post(`/`, word)
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
    return response;
  };

  addSynonym = (newWord, existingWord) => {
    let response = this.init()
      .post("/synonym", {
        newWord: newWord,
        existingWord: existingWord,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });

    return response;
  };

  updateWord = (wordToBeUpdated, synonymWord) => {
    let response = this.init()
      .put("/synonym", {
        wordToBeUpdated: wordToBeUpdated,
        synonymWord: synonymWord,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
    return response;
  };

  deleteWord = (word) => {
    let response = this.init()
      .delete("word", {
        word: word,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
    return response;
  };
}
