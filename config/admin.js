module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fOeSsIvIta4zlf11oY4TLOWkJXshryJY'),
  },
});
