async function 
 fetchData(a)
 {
    if (Response.ok)
    {
        return await
        Response.json;
    }
    else
    {
        throw new console.error(` Failled to fetch data from ${apiUrl}`)

    }
}