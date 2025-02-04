    //Implementation of trie
    class TrieNode{
        constructor(){
            this.children = {}
            this.isEndOFWord = false
        }
    }

    class Trie {
        constructor(){
            this.root = new TrieNode()
        }
        insert(word){
            let node = this.root
            for(let char of word){
                if(!node.children[char]){
                    node.children[char] = new TrieNode()
                }
                node = node.children[char]
            }
            node.isEndOFWord = true
        }
        search(word){
            let node = this.root
            for(let char of word){
                if(!node.children[char]) return false
                node = node.children[char]
            }
            return node.isEndOFWord
        }
        startsWith(prefix){
            let node = this.root
            for(let char of prefix){
                if(!node.children[char]) return false
            }
            return true
        }
    }

    const trie = new Trie()
    trie.insert("cat")
    trie.insert("dog")
    console.log(trie.search("cat"));
    console.log(trie.search("car"));





    // ------------------------------------------------------------------