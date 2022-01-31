module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '19d23929af57d4474aa9ef7d1f4d9bc7'),
  },
});
