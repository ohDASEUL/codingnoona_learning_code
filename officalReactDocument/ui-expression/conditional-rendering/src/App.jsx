// 챌린지 1 of 3
// ? :를 사용하여 완료되지 않은 항목의 아이콘을 표시
// isPacked가 true가 아닌 경우 조건부 연산자(cond ? a : b)를 사용하여 ❌를 렌더링
// function Item({ name, isPacked }) {
//   return (
//     <li className="item">
//       {name} {isPacked && "✅"}
//     </li>
//   );
// }

// 작성 코드
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? "✅" : "❌"}
    </li>
  );
}

function App() {
  return (
    <section>
      <h1>Sally Ride`s Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

export default App;
