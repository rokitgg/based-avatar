# Crypto Avatar ![](https://crypto-avatar.vercel.app/base?size=20)

Crypto avatars for your on-chain apps, as a microservice.

## Usage

Provide a username to generate an avatar.

Each name will deliver a randomly choosed `avatar` from the official `CryptoPunks` dataset.

Just replace `:string` with an `username` or `email`:

```
https://crypto-avatar.vercel.app/:string
```

You will receive a `png` image with a size of 120\*120px (default size)

![Example Avatar](https://crypto-avatar.vercel.app/example)

### Custom Sizing

You can pass in the `size` query parameter to get a custom size:

```
https://crypto-avatar.vercel.app/example?size=30
```

![Example Avatar with custom size](https://crypto-avatar.vercel.app/example?size=30)