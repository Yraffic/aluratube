import React from "react"
import styled from "styled-components"
import config from "../config.json"
import { CSSReset } from "../src/components/cssrest"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"



function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")
   
   
    return (
    <div
    style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        height: "100%",
        width:0
    }}  
    >
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
        <Header />
        <Timeline SearchValue={valorDoFiltro} playlists={config.playlist} />
    </div>
    )
  }
  
  export default HomePage


  const StyledHeader = styled.div`
   img{
        width: 80px;
        height: 80px;
        border-radius: 50%;
   }
   .user-info{
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
   }
  `;

  const StyledBanner = styled.div`
    background-color: blue;
    background-image: url(${config.bg});
    height: 230px;
  `

  function Header(){
    return(
        <>
        <CSSReset/>
        <StyledHeader>
           <StyledBanner/>
           <section className="user-info">
                <img src={`https://github.com/${config.github}.png`}/>
               <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
               </div>
           </section>
        </StyledHeader></>
    )
  }

  function Timeline({SearchValue, ...propriedades}) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
               
                return (
                    <section key={playlistNames}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.filter((video)=>{
                                 const titleNormalized = video.title.toLowerCase();
                                 const searchValueNormalized = SearchValue.toLowerCase();
                                 return titleNormalized.includes(searchValueNormalized)
                            }).map((videos) => {
                                return (
                                    <a key={videos.url} href={videos.url}>
                                        <img src={videos.thumb} />
                                        <span>
                                            {videos.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}