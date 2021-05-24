import "./styles.css";
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").Value;
  alert(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

// /**
//  * <ul>タグの直下に<div>タグを使用するのはアンチパターン
//  */

// <ul>
//   <li>
//     <div>
//       <p>TODOです</p>
//       <button>完了</button>
//       <button>削除</button>
//     </div>
//   </li>
// </ul>
