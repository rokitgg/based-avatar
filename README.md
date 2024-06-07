# Based Avatar ![](https://based-avatar.vercel.app/base?size=20)

Based avatars for your on-chain apps, as a microservice.

## Usage

Provide a username to generate an avatar.

Each name will deliver a randomly choosed `avatar` from the official `CryptoPunks` dataset.

Just replace `:string` with an `username` or `email`:

```
https://based-avatar.vercel.app/:string
```

You will receive a `png` image with a size of 120\*120px (default size)

![Avatar for base](https://based-avatar.vercel.app/base)

### Custom Sizing

You can pass in the `size` query parameter to get a custom size:

```
https://based-avatar.vercel.app/:string?size=30
```

![Avatar for rauchg](https://based-avatar.vercel.app/base?size=30)