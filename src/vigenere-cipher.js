class VigenereCipheringMachine {
    constructor(isDirectMachine) {
        // create alphabet array
        const ALPHABET_N = 26;
        const START_LETTER = 'A';
        this.alphabet = '';
        for (let startLetter = START_LETTER.charCodeAt(),
            i = startLetter; i < startLetter + ALPHABET_N; i++)
            this.alphabet += String.fromCharCode(i);

        // check if isDirectMachine is valid
        if (arguments.length === 0)
            this.isDirectMachine = true;
        else if (typeof isDirectMachine === 'boolean')
            this.isDirectMachine = isDirectMachine;
    }

    encrypt(message, key) {
        if (arguments.length < 2 ||
            typeof message !== 'string' ||
            typeof key !== 'string') throw new Error;

        // make unitary form of message & key
        message = message.toLowerCase();
        key = key.toLowerCase();

        // get parsed message in MESSAGE
        const MESSAGE = message.split('').filter((letter) => {
            if (letter >= 'a' && letter <= 'z')
                return letter;
        }).join('');

        let resultArr = [];
        let indexAtParsedMessage = -1;
        for (let i = 0; i < message.length; i++) {
            let letter = message[i];
            if (letter >= 'a' && letter <= 'z') {
                // perform encryption
                resultArr += (function () {
                    indexAtParsedMessage++;

                    let M = MESSAGE[indexAtParsedMessage].charCodeAt() - 'a'.charCodeAt();
                    let K = key[indexAtParsedMessage % key.length].charCodeAt() - 'a'.charCodeAt();

                    return String.fromCharCode(((M + K) % this.alphabet.length) + 'a'.charCodeAt());
                }).bind(this)();
            } else {
                resultArr += letter;
            }
        }
        resultArr = resultArr.toUpperCase();
        return this.isDirectMachine ? resultArr : resultArr.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {
        if (arguments.length < 2 ||
            typeof encryptedMessage !== 'string' ||
            typeof key !== 'string') throw new Error;

        // make unitary form key
        encryptedMessage = encryptedMessage.toUpperCase();
        key = key.toLowerCase();

        // get parsed encryptedMessage in CRYPTED
        const CRYPTED = encryptedMessage.split('').filter((letter) => {
            if (letter >= 'A' && letter <= 'Z')
                return letter;
        }).join('');

        let resultArr = [];
        let indexAtParsedCrypted = -1;
        for (let i = 0; i < encryptedMessage.length; i++) {
            let letter = encryptedMessage[i];
            if (letter >= 'A' && letter <= 'Z') {
                // perform decryption
                resultArr += (function () {
                    indexAtParsedCrypted++;

                    let C = CRYPTED[indexAtParsedCrypted].charCodeAt() - 'A'.charCodeAt();
                    let K = key[indexAtParsedCrypted % key.length].charCodeAt() - 'a'.charCodeAt();
                    
                    if (C - K < 0)
                        return String.fromCharCode(((C - K + this.alphabet.length) % this.alphabet.length) + 'A'.charCodeAt())
                    else
                        return String.fromCharCode(((C - K) % this.alphabet.length) + 'A'.charCodeAt());
                }).bind(this)();
            } else {
                resultArr += letter;
            }
        }
        return this.isDirectMachine ? resultArr : resultArr.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;