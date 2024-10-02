function SectionTitle(props) {
  const titleStyle = {
    display: "block",
    padding: "30px",
    paddingLeft: "5vw",
  };
  return <h1 style={titleStyle}>{props.title}</h1>;
}
export default SectionTitle;
