function generateKeyPair() {
    const rsa = forge.pki.rsa;
    const keyPair = rsa.generateKeyPair({ bits: 2048, e: 0x10001 });

    // 将公钥和私钥转换为 DER 编码格式的 Base64 字符串
    const publicKeyDer = forge.pki.publicKeyToAsn1(keyPair.publicKey);
    const publicKeyDerBytes = forge.asn1.toDer(publicKeyDer).getBytes();
    const publicKeyString = forge.util.encode64(publicKeyDerBytes);

    const privateKeyDer = forge.pki.privateKeyToAsn1(keyPair.privateKey);
    const privateKeyDerBytes = forge.asn1.toDer(privateKeyDer).getBytes();
    const privateKeyString = forge.util.encode64(privateKeyDerBytes);

    return [publicKeyString, privateKeyString];
}