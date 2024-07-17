import createAxiosInstance from '../api/axios';

export const getUsersData = () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = createAxiosInstance().get('/users');
    return response;
  } catch (error) {
    throw error;
  }
};
