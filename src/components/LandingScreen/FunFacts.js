import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross,
  Spacer
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";
import crossButton from "../../assets/x-button.svg";

const FunFactsBox = styled.div`
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



const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
  line-height: 1.5em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
 `;

const ExtLink = styled.a`
  color: #FF8A00;
`;

const FunFactsModal = ({ handleClose }) => {
  const svgSize = window.matchMedia('screen and (max-width: 768px)').matches ? '60px' : '150px';
  return (
    <FunFactsBox>
        <HeaderWrapper>
          <CloseCross onClick={handleClose} src={crossButton} />
          <PageHeader>À Propos du Recyclage</PageHeader>
        </HeaderWrapper>
        <MessageBox primary><BoxMessage>

        <p>Toutes les ressources naturelles que nous utilisons et les déchets que nous créons font du mal à la planète et aux animaux qui la partagent avec nous.</p>

        <p>Cela peut sembler effrayant, mais il y a quelque chose que nous pouvons tous faire !</p>

        <p>Nous pouvons <OrangeText>RÉDUIRE, RÉUTILISER</OrangeText> et <OrangeText>RECYCLER</OrangeText>, pour éviter que nos déchets ne se retrouvent dans des décharges malodorantes ou dans l'océan.</p></BoxMessage>
        </MessageBox>

       

        <MessageBox primary>
          <BoxMessage>
          <p><OrangeText>RÉDUIRE</OrangeText></p>
          
          <FactList>
            <li>Quand vous faites vos courses, n'achetez que ce dont vous avez besoin.</li>
            <li>Pouvez-vous faire vos courses dans une épicerie zéro déchet ?</li>
            <li>Essayez de marcher plus au lieu d'utiliser la voiture/les motos. Vos parents utiliseront moins d'essence !</li>
            <li> Éteignez le robinet quand vous vous brossez les dents et vous gaspillerez moins d'eau</li>
            <li>Éteignez la télévision, la console de jeux et les équipements électriques pour réduire votre consommation d'énergie</li>
          </FactList>

          <Flexy>
            <Walk width={svgSize}  height={svgSize}/>
            <Tap width={svgSize}  height={svgSize}/>
            <TV width={svgSize}  height={svgSize}/>
          </Flexy>
          

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
            
          <p><OrangeText>RÉUTILISER</OrangeText></p>

          <FactList>
            <li>Apportez un sac réutilisable ou un vieux sac avec vous quand vous allez faire les courses</li>
            <li>Quand quelque chose est cassé, voyez si vous pouvez le réparer au lieu de le jeter</li>
            <li>Si on ne peut pas le réparer, voyez si vous pouvez lui donner une nouvelle utilisation !</li>
            <li>Donnez les articles indésirables à des organisations caritatives</li>
            <li>Réutilisez le papier de rebut – vous pouvez toujours utiliser les deux côtés d'une feuille de papier pour dessiner !</li>
          </FactList>

          <Flexy>
            <PlasticBag width={svgSize}  height={svgSize}/>
            <Shirt width={svgSize}  height={svgSize}/>
            <Paper width={svgSize}  height={svgSize}/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

        <MessageBox primary>
          <BoxMessage>
          
          <p><OrangeText>RECYCLER</OrangeText></p>
          
            <FactList>
              <li>Essayez toujours d'acheter des choses fabriquées à partir de matières recyclées</li>
              <li>Triez tous vos déchets pour que le verre, les boîtes de conserve, le plastique et le papier puissent être recyclés</li>
              <li>Réfléchissez aux autres choses qui peuvent être recyclées dans votre centre de recyclage local, comme les piles, les cartouches d'encre et les vêtements</li>
              <li>Utilisez les déchets de cuisine pour faire du compost pour le jardin</li>
            </FactList>

          <Flexy>
            <PlasticBottle width={svgSize} height={svgSize}/>
            <DrinksCan width={svgSize} height={svgSize}/>
            <Apple width={svgSize} height={svgSize}/>
          </Flexy>

          </BoxMessage>
        </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          
          Découvrez-en plus sur la façon de recycler dans votre région et de réduire les déchets en visitant <ExtLink href='https://www.dwaste.live/' target="blank">DWaste</ExtLink>.
        </BoxMessage>
      </MessageBox>

        <Button primary handleClick={handleClose} label="Fermer"></Button>
        <Spacer/>
    </FunFactsBox>
  );
};

export default FunFactsModal;
