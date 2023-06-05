const abhi=[{
title:"SHE",
Fruits:"MANGO",
Image:"https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbhNS810Nx0uIPYsYQArnnhCDXjbaGOW1l6uOePOWe8UPM4m29DeBT01wQOXPzGgvSy45w3Jr8zm8l8Tt0H6xqkeURdgH-9KYNhaeHKR70r6MBHQbgimc0QS3-Rg1JUFAgIy.jpg?r=e2c"
},{title:"HE",
Fruits:"Apple",
Image:"https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZCv7XAj-2is4pJztcnC0pPNcTezw5XMPjdBOxDrSyBR0UA0j4JfnYS6zKNyCij_SiV3gTuZlhfZdgIPwb9DhckJkIPPt634tHgPm5KpSx6c0VLWDf6kjX_2ICfFJfyORiJ4.jpg?r=e1d"},{
  title:"Dark",
  Fruits:"BANNA",
  Image:"https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVQv1A6xQnfWBrmIm6iVPgryEJISEhS-hBbpxQ5sSOUftV47ER54vRNUyTq2M8p4B5AbCNMwSjGC-KrWLyU77b1Ce5JuPa_CbPYsfCU-o2J0xltM_BstcUij1-Jla3ES2VVN.jpg?r=cfe"
}
];
const Kalee=(user)=>{
  return (<>
  {user.firstname}
  {user.lastname}
  <img src={user.image} alt=" it is not image"/>
  </>)
}
const John=()=>{
 /* let cons=[<h1>hello</h1>,<h1>welcome</h1>]
  let newtemarray=abhi.map((each)=>{
  return (<>{each.title}
  <img src={each.Image} alt="image not found"/>
  {each.Fruits}</>)

})
return (<>{newtemarray}</>) };*/
//return (<> <h1>{abhi[0].title}</h1><h1>{abhi[0].Fruits}</h1> h1>{abhi[0].Image}</h1><h2>{abhi[1].Fruits}</h2> <h2>{abhi[1].title}</h2><h3> <Kalee iamge={abhi.Image}/></h3> <h3> <Kalee lastname="Nageswarara Rao"/></h3> </>)
//return (<>{cons}<Kalee image={abhi[0].Image} firstname={abhi[0].title}/><Kalee image={abhi[1].Image} firstname={abhi[1].title}/><Kalee image={abhi[2].Image} firstname={abhi[2].title}/></>)};

export default John;