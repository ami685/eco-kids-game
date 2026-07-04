import React from "react";
import styled from "styled-components";
import { ReactComponent as RecycleBin } from "../../assets/recycle-bin.svg";
import { ReactComponent as BlackBin } from "../../assets/waste-bin-tidyman.svg";
import { ReactComponent as CompostBin } from "../../assets/compostable-bin.svg";
import heart from "../../assets/heart-lives.svg";
import  starFish  from "../../assets/starfish-smile.svg";
import crossButton from "../../assets/x-button.svg";
import Button from "../Button";
import puzzleOne from "../../assets/pz-1.png"
import puzzleTwo from "../../assets/pz-2.png"

import {
  PageHeader,
  MessageBox,
  PageTitle,
  BoxMessage,
  BadgeBox,
  OrangeText,
  CloseCross,
  IconImage,
  Spacer
} from "../MasterCss";


const HowToPlayBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: scroll;
  display: block;
  z-index: 3000;
  border-radius: 1em;
  border: 2px solid #08345C;
  filter: drop-shadow(4px 4px 4px #08345C);
  text-align: center;
  @media (max-width: 480px) {
    padding-bottom: 13.4vh;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 `;

const CenterChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PuzzleImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const GroupHeader = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const HowToPlayModal = ({ handleClose, game }) => {
  const svgSize = window.matchMedia('screen and (max-width: 768px)').matches ? '20%' : '8rem';
  const isWasteSortingGame = game && game.toLowerCase() == "waste-sorting"
  const isWastePuzzleGame = game && game.toLowerCase() == "waste-puzzle"

  return (
    <>
    <HowToPlayBox>
        <HeaderWrapper>
          <CloseCross onClick={handleClose} src={crossButton}/>
          <PageHeader>Comment jouer {game}</PageHeader>
        </HeaderWrapper>
      {game !== "" && game !== undefined ? (
        <CenterChildren>
          <MessageBox ><BadgeBox><RecycleBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui <OrangeText>PEUVENT ÊTE RECYCLÉS</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><BlackBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui <OrangeText>NE PEUVENT PAS ÊTE RECYCLÉS</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><CompostBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui sont <OrangeText>DES DÉCHETS ALIMENTAIRES</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><IconImage src={heart}/><BoxMessage>Ce sont vos <OrangeText>VIES</OrangeText>. Si vous mettez un article dans la mauvaise poubelle, vous perdez une vie</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={starFish}/><BoxMessage>Si vous mettez un article dans la bonne poubelle, vous obtenez un <OrangeText>POINT ÉTOILE DE MER</OrangeText> !</BoxMessage></BadgeBox></MessageBox>
        {isWastePuzzleGame && <>
          <MessageBox ><BadgeBox><PuzzleImage src={puzzleOne} width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les pièces du puzzle sur le plateau vide</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><PuzzleImage src={puzzleTwo}  width="20%" height={svgSize}/><BoxMessage>Assemblez les pièces pour compléter le puzzle</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><IconImage src={heart}/><BoxMessage>Ce sont vos <OrangeText>VIES</OrangeText>. Chaque soumission incorrecte du puzzle vous coûte une vie</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={starFish}/><BoxMessage>Complétez un puzzle et gagnez un précieux <OrangeText>POINT ÉTOILE DE MER</OrangeText> !</BoxMessage></BadgeBox></MessageBox>
        </>}
        </CenterChildren>
): (
      <>
     
      <PageTitle>Jeu de Tri des Déchets</PageTitle>
        <MessageBox ><BadgeBox><RecycleBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui <OrangeText>PEUVENT ÊTE RECYCLÉS</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><BlackBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui <OrangeText>NE PEUVENT PAS Être RECYCLÉS</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><CompostBin width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les articles qui sont <OrangeText>DES DÉCHETS ALIMENTAIRES</OrangeText> dans cette poubelle</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={heart}/><BoxMessage>Ce sont vos <OrangeText>VIES</OrangeText>. Si vous mettez un article dans la mauvaise poubelle, vous perdez une vie</BoxMessage></BadgeBox></MessageBox>
      <MessageBox ><BadgeBox><IconImage src={starFish}/><BoxMessage>Si vous mettez un article dans la bonne poubelle, vous obtenez un <OrangeText>POINT ÉTOILE DE MER</OrangeText> !</BoxMessage></BadgeBox></MessageBox>

      <PageTitle>Jeu de Puzzle de Déchets</PageTitle>
          <MessageBox ><BadgeBox><PuzzleImage src={puzzleOne} width="20%" height={svgSize}/><BoxMessage>Glissez et déposez les pièces du puzzle sur le plateau vide</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><PuzzleImage src={puzzleTwo}  width="20%" height={svgSize}/><BoxMessage>Assemblez les pièces pour compléter le puzzle</BoxMessage></BadgeBox></MessageBox>
          <MessageBox ><BadgeBox><IconImage src={heart}/><BoxMessage>Ce sont vos <OrangeText>VIES</OrangeText>. Chaque soumission incorrecte du puzzle vous coûte une vie</BoxMessage></BadgeBox></MessageBox>
        <MessageBox ><BadgeBox><IconImage src={starFish}/><BoxMessage>Complétez un puzzle et gagnez un précieux <OrangeText>POINT ÉTOILE DE MER</OrangeText> !</BoxMessage></BadgeBox></MessageBox>
      </>
  )}

  <Button primary handleClick={handleClose} label="Fermer"></Button>
        <Spacer/>
    </HowToPlayBox>
    </>
    
  );
};

export default HowToPlayModal;
