

export const getGifs = async(category) => {

 
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=12&api_key=p3OH4vpJawTquO2XgAMHeUwmLA0O3xb7`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    // console.log(data)

    const gifs = data.map( img => {
        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url

        }
    })

    return gifs;
}
