import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Sidebar = ({ cardData, onChange }) => {
  const sidebarRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current && sidebarRef.current) {
      gsap.from(sidebarRef.current, {
        x: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
      hasAnimated.current = true;
    }
  }, []);   // ← runs only once on mount = 100% stable after first second

  const handleInput = (e) => {
    onChange({ ...cardData, [e.target.name]: e.target.value });
  };

  return (
    <div ref={sidebarRef} className="sidebar">
      <h1>Cardly</h1>
      <p style={{ color: '#615c6d', marginBottom: '32px' }}>Create beautiful digital cards</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Full Name</label>
          <input name="name" value={cardData.name} onChange={handleInput} placeholder="Alex Rivera"
            style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff', fontSize: '1.1rem' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Username (your link)</label>
          <input name="username" value={cardData.username} onChange={handleInput} placeholder="alexrivera"
            style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff', fontSize: '1.1rem' }} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Email</label>
            <input name="email" type="email" value={cardData.email} onChange={handleInput}
              style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Phone</label>
            <input name="phone" type="tel" value={cardData.phone} onChange={handleInput}
              style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff' }} />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Website</label>
          <input name="website" type="url" value={cardData.website} onChange={handleInput} placeholder="https://yoursite.com"
            style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Bio</label>
          <textarea name="bio" value={cardData.bio} onChange={handleInput} rows="3" placeholder="Passionate designer & coffee lover ☕"
            style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff', resize: 'none' }} />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Profile Image URL (optional)</label>
          <input name="profile_image" value={cardData.profile_image} onChange={handleInput}
            style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff' }} placeholder="https://..." />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Theme</label>
            <select name="theme" value={cardData.theme} onChange={handleInput}
              style={{ width: '100%', padding: '16px 20px', borderRadius: '10px', border: '1px solid #e0d4ff' }}>
              <option value="soft-purple">Soft Purple</option>
              <option value="soft-blue">Soft Blue</option>
              <option value="soft-green">Soft Green</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', color: '#000000', marginBottom: '6px' }}>Background</label>
            <input type="color" name="background" value={cardData.background} onChange={handleInput}
              style={{ width: '100%', height: '52px', padding: '4px', borderRadius: '10px', border: '1px solid #e0d4ff' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;