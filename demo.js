function demo() {// 示例用法
const publicKeyString = "公钥"; // 使用生成的公钥字符串
const privateKeyString = "私钥"; // 使用生成的私钥字符串
const plaintext = "Hello, World!"; // 明文

// 加密
const ciphertext = encryptRSA(publicKeyString, plaintext);
console.log("加密后的密文: " + ciphertext);

// 解密
const decryptedText = decryptRSA(privateKeyString, ciphertext);
console.log("解密后的明文: " + decryptedText);}