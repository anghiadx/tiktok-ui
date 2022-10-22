import { httpRequest } from '~/utils';

const path = 'users/search';

export const search = async (keyword, type = 'less') => {
    const dataResponse = await httpRequest.get(path, {
        params: {
            q: keyword,
            type,
        },
    });
    return dataResponse.data;
};
