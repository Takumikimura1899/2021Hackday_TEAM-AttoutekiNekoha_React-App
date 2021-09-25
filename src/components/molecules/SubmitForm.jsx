const SubmitForm = ({ handleSubmit, text, onChange }) => {
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={onChange} />
      <input type="submit" value="追加" />
    </form>
  );
};

export default SubmitForm;
