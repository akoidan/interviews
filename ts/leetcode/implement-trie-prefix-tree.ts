
interface TreeNode {
    endOfWord: boolean;
    children: Record<string, TreeNode>;
}
export class Trie {
    children: TreeNode = {
        endOfWord: false,
        children: {},
    };

    insert(word: string): void {
        let children: TreeNode = this.children;
        for (let c of word) {
            if (!children.children[c]) {
                children.children[c] = {
                    endOfWord: false,
                    children: {},
                }!;
            }
            children = children.children[c];
        }
        children.endOfWord = true;
    }

    search(word: string): boolean {
        let children: TreeNode = this.children;
        for (let c of word) {
            if (!children.children[c]) {
                return false;
            }
            children = children.children[c];
        }
       return children.endOfWord;
    }

    startsWith(prefix: string): boolean {
        let children: TreeNode = this.children;
        for (let c of prefix) {
            if (!children.children[c]) {
                return false;
            }
            children = children.children[c];
        }
       return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
