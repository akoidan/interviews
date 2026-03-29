export function splitWords(text: string) {
  if (!text.length) {
    return [];
  }
  return text.split(/[\s,]+/);
}

export class VueComponent {

  constructor(text: string) {
    this.text = text
  }

  text: string = "";

  get uniqueWordsCountObject(): object {
     const words = splitWords(this.text);
    const wordsDidstr: {[id: string]: number} = {};
    words.forEach(a => {
      if (!wordsDidstr[a]) {
        wordsDidstr[a] = 0;
      }
      wordsDidstr[a]++;
    })     ;
    return wordsDidstr;

  }

  get uniqueWordsCount(): string {
    return JSON.stringify(this.uniqueWordsCountObject)

  }
}
