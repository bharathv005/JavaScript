const github_api=  "https://api.github.com/users/bharathv005"

const fetchData = async()=>{
    const res = await fetch(github_api);
    const jsonData = await res.json();
    console.log(jsonData.bio);
}

fetchData();

export const name="JAI SHREE RAM";