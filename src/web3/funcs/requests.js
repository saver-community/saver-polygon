export const HandleRequest = async (req) => {
    let haveToRequest = true;
    while (haveToRequest) {
        try {
            return await req.call();
        } catch (err) {
            if (err.response && err.response.status === 429) 
                await new Promise(resolve => setTimeout(resolve, 1000));
            else
                haveToRequest = false;
        }
    }
}