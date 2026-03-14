import { useState } from 'react';
import { gsap } from 'gsap';
import Sidebar from '../components/Sidebar';
import CardPreview from '../components/CardPreview';

const Builder = () => {
  const [cardData, setCardData] = useState({
    name: '', username: '', email: '', phone: '', website: '',
    bio: '', profile_image: '', theme: 'soft-purple', background: '#f8f7fc'
  });
  const [generatedLink, setGeneratedLink] = useState('');
  const [error, setError] = useState('');

  const handleGenerate = () => {
    if (!cardData.username) {
      setError('Username is required');
      return;
    }

    const cards = JSON.parse(localStorage.getItem('cardly_cards') || '{}');
    cards[cardData.username] = cardData;
    localStorage.setItem('cardly_cards', JSON.stringify(cards));

    const link = `${window.location.origin}/${cardData.username}`;
    setGeneratedLink(link);
    navigator.clipboard.writeText(link);
    setError('');

    // GSAP button animation
    const btn = document.querySelector('.button');
    gsap.to(btn, { scale: 0.95, duration: 0.1, yoyo: true, repeat: 1 });
    alert('🎉 Card saved! Link copied.');
  };

  return (
    <div className="builder">
      <Sidebar cardData={cardData} onChange={setCardData} />

      <div className="preview-area">
        <div style={{ width: '100%', maxWidth: '420px' }}>
          <CardPreview cardData={cardData} />

          {error && <p style={{ color: '#ef4444', textAlign: 'center', marginTop: '20px' }}>{error}</p>}

          <button onClick={handleGenerate} className="button">
            ✨ Generate & Copy Shareable Link
          </button>

          {generatedLink && (
            <div className="generated-link">
              Your link: <strong>{generatedLink}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Builder;