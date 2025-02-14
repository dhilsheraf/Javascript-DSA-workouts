class TrieNode {
    constructor() {
        this.children = {};  // Stores child nodes (characters)
        this.isEndOfWord = false;  // Marks the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    // Search for a complete word
    search(word) {
        let node = this.root;
        for (let char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    // Find words that start with a given prefix (Autocomplete)
    autoComplete(prefix) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                return [];  // No words found
            }
            node = node.children[char];
        }
        return this._getWordsFromNode(node, prefix);
    }

    // Helper function to collect words from a given Trie node
    _getWordsFromNode(node, prefix) {
        let words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (let char in node.children) {
            words = words.concat(this._getWordsFromNode(node.children[char], prefix + char));
        }
        return words;
    }
}

// Example Usage:
let trie = new Trie();
trie.insert("apple");
trie.insert("app");
trie.insert("apricot");
trie.insert("banana");
trie.insert("bat");

console.log(trie.search("app")); // true
console.log(trie.search("batman")); // false
console.log(trie.autoComplete("ap")); // ["apple", "app", "apricot"]
console.log(trie.autoComplete("ba")); // ["banana", "bat"]
console.log(trie.autoComplete("x")); // []

class TrieNOde {
    constructor() {
        this.children = {}
        this.isEndOfWord = false
    }
}

class Triee {
    constructor() {
        this.root = new TrieNOde()
    }
    insert(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNOde()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true
    }
    search(word) {
        let node = this.root
        for (let char of word) {
            if (!node.children[char]) return false
            node = node.children[char]
        }
        return node.isEndOfWord
    }

    startswith(prefix) {
        let node = this.root
        for (let char of prefix) {
            if (!node.children[char]) return false
            node = node.children[char]
        }
        return true

    }
    

    searchPrefix(prefix){
        let node = this.root
        for(let char of prefix){
            if(!node.children[char]) return []
            node = node.children[char]
        }
        return this.collectWord(node,prefix)

    }
    collectWord(node,prefix){
        let words = []
        if(node.isEndOfWord) words.push(prefix)
        for(let char in node.children){
            words = words.concat(this.collectWord(node.children[char],prefix+char))
    }
    return words
    }


}

const triee = new Triee()

triee.insert("helloooooooooo")
console.log(triee.search("helloooooooooo"))
console.log(triee.startswith("hel"));
triee.insert("hail")
triee.insert("heyy")
triee.insert("wallaaaaaaa")
triee.insert("entho")
triee.insert("car")
triee.insert("cat")
triee.insert("can")

console.log(triee.searchPrefix("c"))
console.log(triee.searchPrefix("he"));
console.log(triee.root);
console.dir(trie.root, { depth: null });
