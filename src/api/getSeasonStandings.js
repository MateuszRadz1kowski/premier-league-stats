import { useEffect } from "react";

export default function GetSeasonStandings(){

     useEffect(()=>{
        async function getData(){
            try{
                const data = await fetch('https://api.football-data.org/v4/competitions/PL/standings', { 
    method: 'get',
    mode: 'no-cors',
    headers: new Headers({
        'Access-Control-Allow-Origin': '*', 
        'Content-Type': 'application/json',
        'X-Auth-Token' : '35811dfae35243f6a2549f034bcff645'
    })});
                const response = await data.json();
                console.log(response)
            }
            catch{
                console.log("Wystąpił błąd podczas pobierania danych z sezonu")
            }
        }
        getData()
    },[])
}