export default function ResultModal({ ref, result, targetTime }) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong> {targetTime} seconds.</strong>
      </p>
      <p>
        you stopped the timer with <strong> X seconds left</strong>
      </p>
      <form method="dialog">
        <button>close</button>
      </form>
    </dialog>
  );
}
