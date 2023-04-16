function demo(p1,p2) {// 示例用法
const publicKeyString = p1;
const privateKeyString = p2;
const plaintext = "Hello, World!"; // 明文

// 加密
const ciphertext = rsaEncrypt( plaintext, publicKeyString);
console.log("加密后的密文: " + ciphertext);

// 解密
const decryptedText = rsaDecrypt(ciphertext,privateKeyString);
console.log("解密后的明文: " + decryptedText);}