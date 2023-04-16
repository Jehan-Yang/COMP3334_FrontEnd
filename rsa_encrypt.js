function encryptRSA(publicKeyString, plaintext) {
    const publicKeyDerBytes = forge.util.decode64(publicKeyString);
    const publicKeyDer = forge.asn1.fromDer(forge.util.createBuffer(publicKeyDerBytes));
    const publicKey = forge.pki.publicKeyFromAsn1(publicKeyDer);
    const encrypted = publicKey.encrypt(plaintext);
    return forge.util.encode64(encrypted.getBytes());
  }
  
