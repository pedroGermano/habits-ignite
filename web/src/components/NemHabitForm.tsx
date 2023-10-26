export function NewHabitForm() {
  return (
    <form>
      <label htmlFor="title">Qual seu comprometimento?</label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercicios, dormi bem, etc"
        autoFocus
      />
    </form>
  );
}
