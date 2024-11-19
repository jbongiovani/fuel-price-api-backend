// codigo copiado, desabilitado
export default () => ({
  app_port: parseInt(process.env.APP_PORT, 10) || 2222,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  },
  jwt_secret: process.env.JWT_SECRET || 'key',

  UPLOAD_PATH: process.env.UPLOAD_PATH || './uploadsß',
});
