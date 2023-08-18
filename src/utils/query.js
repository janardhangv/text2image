async function query(data,url) {
    // console.log({data},{url})
    try{
      const response = await fetch(
        url,
        {
          headers: { Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`},
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob();
      return result;

    }catch(error){
      return error
    }
    
  }

export default query;
  