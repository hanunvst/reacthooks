const data=[{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 1,
    "id": 4,
    "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    "url": "https://via.placeholder.com/600/d32776",
    "thumbnailUrl": "https://via.placeholder.com/150/d32776"
  }];
  const Ganna=()=>{
    return (<section className="posts-container">
        {data.map((ecahobj)=>{
            const {id,thumbnailUrl,title,url}=ecahobj;
            return (<Profile key={id} id={id} thumbnailUrl={thumbnailUrl}
            title={title} url={url} />);
        })}
    </section>);};

  const Profile=({thumbnailUrl,title,url})=>{
  //const Profile=(props)=>{
   // const {thumbnailUrl,title,url}= props
    return(<article className="profile_card"><img src={thumbnailUrl} alt="do something"/><h2>{title}</h2>
    <a href={url}>Details</a>
    </article>);
  };
  export default Ganna;