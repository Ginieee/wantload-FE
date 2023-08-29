import React from 'react';
import styled from 'styled-components';
import { CARD_IMG } from '../../data/variable';

interface CardProps {
  card: number;
  isFlipped: boolean;
  onClick: () => void;
}

const Card = ({ card, isFlipped, onClick }: CardProps) => {
  return (
    <FlipCard>
      <div className={`card ${isFlipped ? 'active' : ''}`} onClick={onClick}>
        <div className="front">
          <img src={CARD_IMG[card]} alt="카드 뒷면" />
        </div>
        <div className="back">
          <img src={'assets/card/paws.png'} alt="카드 뒷면" />
        </div>
      </div>
    </FlipCard>
  );
};

const FlipCard = styled.div`
  width: 78.25px;
  height: 92px;
  border-radius: 8px;
  position: relative;
  perspective: 1100px;

  & .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.4s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);

    &.active {
      transform: rotateY(0deg);
    }

    & .front,
    & .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      border-radius: 8px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        border-radius: 8px;
      }
    }

    & .front {
      background-color: black;
    }

    & .back {
      background-color: white;
      transform: rotateY(180deg);
    }
  }
`;

export default Card;