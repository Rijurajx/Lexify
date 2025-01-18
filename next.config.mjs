/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  images: {
    domains: ['assets.aceternity.com', 'images.unsplash.com', 'theblue.ai', 'www.shutterstock.com', 'static.vecteezy.com', 'a.storyblok.com', 'png.pngtree.com'], // Add the allowed domain here
  },
};

export default nextConfig;
