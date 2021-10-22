export default {
port: 1337,
dbUri: 'mongodb://localhost:27017/rest-api-nodejs',
saltWorkFactor: 10,
accessTokenTtl: '15m',
refreshTokenTtl: '1y',
publicKey: `-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgH9j+kfnGfIhzMSnG+CVjzO856Uu
YeA0cOmRTxK+9+ikQjSKlr8mT0pbfQTxBkuyEocYZS0rWmHNgFynekZFYYHK8WZT
KkO5QfBXvri/GbKFgrBX4qko9UDnj/yzqPZGh7xQ4o2jk0C0TgHzIuxYlloX8JXn
hLV7Q0nlWq3vkBrHAgMBAAE=
-----END PUBLIC KEY-----`,
privateKey: `-----BEGIN RSA PRIVATE KEY-----
MIICWQIBAAKBgH9j+kfnGfIhzMSnG+CVjzO856UuYeA0cOmRTxK+9+ikQjSKlr8m
T0pbfQTxBkuyEocYZS0rWmHNgFynekZFYYHK8WZTKkO5QfBXvri/GbKFgrBX4qko
9UDnj/yzqPZGh7xQ4o2jk0C0TgHzIuxYlloX8JXnhLV7Q0nlWq3vkBrHAgMBAAEC
gYBuYl949pPQ7+DTdkn9rRrNJh9DTpGZCVfdy//MqpV+jPahOIWvVK7YK7aFFaTy
6naLgWQKY8qJfNyBbM3THkOCTTADWSKFdm0jRXCwy/zYgjutW1IokZHNUeTNSuEt
zqvVkoEDRnLLhWj8cqkcNVAo8mbYuQa6Cv7sSy8Ib2ZXwQJBAMpOauShV0sCWu+/
fqxHK1/oxqNeDiY1fDSjVETHzVci3Mvt6z79OB48pNToxkoSJdgnWRHKuxqnq76u
f4/Gd+8CQQChM3OzLJaO3+FYZkT/ctkWnaW6pqsdUUqbE5xVyTE7A0PSGlArZbeM
sFyBrzxC3JGSNhCH5yb/roAeSm53hfKpAkBFlPUlD+0jSnsWjOm3vX7IrRptJDN/
ptPCkw6v3Xzd5IrGxV0tPBDqLXeQF0PkRBuqHdZ/zRfPki37Fq+fNucXAj8btLwu
D3vREqmoh+tT/GlTecUCT6MZZt9rx/MWy32qpuUBN4SP8OubQrSjlXrGAyMB/kjZ
EuGhEFz019YktOECQDpJATns2TkeFgBkxldZsG5u6MLbiYZVbR0rYeXwcbfxR0Zn
MwB+9wXhtwI3Nr1xXn+mrQ1Xqhh55MYsG8DMA8k=
-----END RSA PRIVATE KEY-----`,
}