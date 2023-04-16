
function rsaEncrypt(plaintext, publicKey) {
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(publicKey);
        const encryptedAesKey = jsEncrypt.encrypt(plaintext);
        return encryptedAesKey;
    }
    