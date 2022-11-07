import styled from "styled-components"
import config from "../config.json"
import { CSSReset } from "../src/components/cssrest"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"
function HomePage() {
   
    return (
    <div
    style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        // backgroundColor: "red",
    }}  
    >
        <Menu />
        <Header />
        <Timeline playlists={config.playlist} />
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
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
   }
  `;

  function Header(){
    return(
        <>
        <CSSReset/>
        <StyledHeader>
           {/* <img src=""/> */}
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

  function Timeline(propriedades) {
    // console.log("Dentro do componente", propriedades.playlists);
    const playlistNames = Object.keys(propriedades.playlists);
    // Statement
    // Retorno por expressão
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = propriedades.playlists[playlistName];
                console.log(playlistName);
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
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