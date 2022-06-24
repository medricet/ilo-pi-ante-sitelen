function TextBox({ placeholder, height, onChange }: TextBoxProps) {
  function onTextChanged(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  return (
    <textarea
      placeholder={placeholder}
      spellCheck={false}
      onChange={onTextChanged}
      style={{
        height
      }}
    />
  );
}

TextBox.defaultProps = {
  placeholder: "enter text here...",
  height: "200px",
  onChange: () => {}
};

interface TextBoxProps {
  placeholder: string,
  height: string,
  onChange: (text: string) => any
}

export default TextBox;