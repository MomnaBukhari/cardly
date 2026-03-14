import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const CardPreview = ({ cardData }) => {
  const cardRef = useRef(null);
  const avatarRef = useRef(null);
  const hasAnimated = useRef(false);   // ← prevents re-animation

  const { name, username, email, phone, website, bio, profile_image, background, theme } = cardData || {};

  const accentStart = theme === 'soft-blue' ? '#60a5fa' : theme === 'soft-green' ? '#4ade80' : '#c084fc';
  const accentEnd = theme === 'soft-blue' ? '#22d3ee' : theme === 'soft-green' ? '#14b8a6' : '#e0a8ff';

  useEffect(() => {
    if (!hasAnimated.current && cardRef.current) {
      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.4,
        ease: "back.out(1.4)"
      });
      hasAnimated.current = true;
    }

    if (avatarRef.current) {
      gsap.to(avatarRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.6)"
      });
    }
  }, []);   // ← only runs once on mount = stable live preview

  return (
    <div ref={cardRef} className="card" style={{ backgroundColor: background || '#ffffff' }}>
      <div className="card-header" style={{ background: `linear-gradient(135deg, ${accentStart}, ${accentEnd})` }}>
        <div ref={avatarRef} className="avatar">
          {profile_image ? (
            <img src={profile_image} alt="avatar" />
          ) : (
            '👤'
          )}
        </div>
      </div>

      <div className="card-body">
        <h2>{name || 'Your Name'}</h2>
        <div className="username">@{username || 'username'}</div>

        <div className="info">
          {email && <div>📧 {email}</div>}
          {phone && <div>📱 {phone}</div>}
          {website && <div>🌐 <a href={website} target="_blank" style={{ color: '#c084fc' }}>{website}</a></div>}
        </div>

        {bio && <div className="bio">{bio}</div>}
      </div>
    </div>
  );
};

export default CardPreview;