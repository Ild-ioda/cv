export default function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checmark icon" />
      <p>{skill}</p>
    </span>
  );
}
