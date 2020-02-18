class VigenereCipheringMachine {
    constructor(isDirectMachine, languageCode) {
        // check if isDirectMachine is valid
        switch (isDirectMachine) {
            case undefined:
            case true:
                this.isDirectMachine = true; break;
            default:
                this.isDirectMachine = false; break;
        }

        // set constants matching language code
        this._initAlphabetConstants(languageCode);
    }

    _initAlphabetConstants(languageCode) {
        switch (languageCode) {
            case 'ruRU':
                this.START_LETTER = 'А'; this.ALPHABET_LENGTH = 33; break;
            case 'enUS':
            case 'enGB':
            default:
                this.START_LETTER = 'A'; this.ALPHABET_LENGTH = 26; break;
        }
    }

    encrypt(message, key) {
        return this._encryptDecrypt(message, key, true);
    }

    decrypt(encryptedMessage, key) {
        return this._encryptDecrypt(encryptedMessage, key, false);
    }

    _encryptDecrypt(message, key, isEncryption) {
        if (arguments.length < 2 ||
            typeof message !== 'string' ||
            typeof key !== 'string') throw new Error;

        // if isEncryption = true is passed -> then encrypt
        // else if isEncryption = false is passed -> then decrypt

        // make unitary form of message & key
        message = message.toUpperCase();
        key = key.toUpperCase();

        // get parsed message in MESSAGE
        const startLetter = this.START_LETTER;
        const endLetter = String.fromCharCode(
            this.START_LETTER.charCodeAt() + this.ALPHABET_LENGTH);
        const MESSAGE = message.split('').filter(letter => {
            if (letter >= startLetter && letter <= endLetter)
                return letter;
        }).join('');

        const startLetterCode = startLetter.charCodeAt();
        let resultArr = [];
        let indexAtParsedMessage = -1;

        for (let i = 0; i < message.length; i++) {
            let letter = message[i];
            if (letter >= startLetter && letter <= endLetter) {
                // perform encryption/decryption
                indexAtParsedMessage++;

                // get K number = key[i % L] (as letterCode: number)
                // i % L = to provide isolation and bypass cyclical array
                let K = key[indexAtParsedMessage % key.length].charCodeAt()
                    - startLetterCode;
                if (isEncryption) {
                    // get M = get current letter in message
                    // as letterCode: number;
                    let M = MESSAGE[indexAtParsedMessage].charCodeAt()
                        - startLetterCode;

                    // String(position of encodedLetter)
                    resultArr += String.fromCharCode(
                        ((M + K) % this.ALPHABET_LENGTH) + startLetterCode
                    );
                } else {
                    // get C = get current letter in encryptedMessage
                    // as letterCode: number;
                    let C = MESSAGE[indexAtParsedMessage].charCodeAt()
                        - startLetterCode;

                    if (C - K < 0)
                        // if C - K negative -> we need to add codeBaseLength
                        // to get the position of decrypted letter
                        resultArr += String.fromCharCode(
                            ((C - K + this.ALPHABET_LENGTH)
                                % this.ALPHABET_LENGTH) + startLetterCode
                        );
                    else
                        // if C - K positive -> then we can get position
                        // without adding codeBaseLength
                        resultArr += String.fromCharCode(
                            ((C - K) % this.ALPHABET_LENGTH) + startLetterCode
                        );
                }
            } else {
                resultArr += letter;
            }
        }
        return this.isDirectMachine ?
            resultArr : resultArr.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;