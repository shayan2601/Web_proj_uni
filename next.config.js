module.exports = {
  images: {
    domains: ["links.papareact.com", "fakestoreapi.com", "images.unsplash.com"],
  },
  // loaders: [{ test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }],
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY,

    MONGODB_URI: process.env.MONGODB_URII,
  },
};
