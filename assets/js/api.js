async function fetchProfileData(){
    const url = "https://raw.githubusercontent.com/joao1barbosa/portfolio-dio/main/data/profile.json"
    const fetching = await fetch(url);
    
    return await fetching.json();
}
