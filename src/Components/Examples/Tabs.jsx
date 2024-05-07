export default function Tabs({ buttoms, children, buttomsContainer = "menu" }) {
  const ButtomesCountainer = buttomsContainer;
  return (
    <>
      <ButtomesCountainer>{buttoms}</ButtomesCountainer>
      {children}
    </>
  );
}
