import './SitelenPona.css'

function SitelenPona({ latinText, fontSize, color }: SitelenPonaProps) {
  return (
    <div>
      <pre
        style={{
          fontSize: fontSize + "px",
          color
        }}
        className="sitelen-pona"
      >
        {latinText}
      </pre>
    </div>
  );
}

SitelenPona.defaultProps = {
  color: "#000000"
}

interface SitelenPonaProps {
  latinText: string,
  fontSize: number,
  color: string
}

export default SitelenPona;