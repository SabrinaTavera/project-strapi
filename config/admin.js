module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd7323bb106937485c2761678cfdac531'),
  },
});
