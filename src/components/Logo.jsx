import { logoAsset } from '../data/site';

export function Logo({ onClick }) {
  return (
    <button className="logo" type="button" onClick={onClick} aria-label="Go to home">
      <span className={`logo-mark ${logoAsset ? 'has-logo' : ''}`}>
        {logoAsset ? <img src={logoAsset} alt="" /> : 'Q'}
      </span>
      <span>
        <strong>Quazer</strong>
        <small>Construction</small>
      </span>
    </button>
  );
}
