function decryptRSA(privateKeyString, ciphertext) {
    const privateKeyDerBytes = forge.util.decode64(privateKeyString);
    const privateKeyDer = forge.asn1.fromDer(forge.util.createBuffer(privateKeyDerBytes));
    const privateKey = forge.pki.privateKeyFromAsn1(privateKeyDer);
    const ciphertextBytes = forge.util.decode64(ciphertext);
    const ciphertextBuffer = forge.util.createBuffer(ciphertextBytes);
    const decrypted = privateKey.decrypt(ciphertextBuffer);
    return decrypted.toString();
  }
  
