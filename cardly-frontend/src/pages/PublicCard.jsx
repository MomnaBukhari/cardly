import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardPreview from '../components/CardPreview';
import { gsap } from 'gsap';

const PublicCard = () => {
  const { username } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const cards = JSON.parse(localStorage.getItem('cardly_cards') || '{}');
    if (cards[username]) {
      setCard(cards[username]);
      // Public view gets the full impressive entrance every time
      setTimeout(() => {
        gsap.from(".card", { 
          scale: 0.85, 
          opacity: 0, 
          duration: 1.2, 
          ease: "back.out(1.2)" 
        });
      }, 100);
    }
  }, [username]);

  if (!card) {
    return <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: '#94a3b8' }}>Card not found 😕</div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f7fc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
      <CardPreview cardData={card} />
      <p style={{ position: 'absolute', bottom: '40px', color: '#94a3b8', fontSize: '0.9rem' }}>MADE WITH ❤️ ON CARDLY</p>
    </div>
  );
};

export default PublicCard;