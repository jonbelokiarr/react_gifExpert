export const getGifs = async ( categoria ) => {
    const apiKey = 'mUAiF3fmtITOBPl0ixCBeIQfnovd4tae';

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ categoria }&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(imagen => ({
        id: imagen.id,
        titulo: imagen.title,
        url: imagen.images.downsized_medium.url
    }))

    return gifs;
}