import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";
  //liタグ生成
  const li = document.createElement("li");
  li.className = "list-text";
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(completeButton.parentNode);

    //Q.上で消しているのに、下でaddTargetで取れる理由がわからない。
    /**
     * A.addEventListenerはcompleteButtonが生成された時に割り当てられるため、
     * その時のcompleteButtonが処理対象となります。
     * よって処理内で先に削除をしていても、その後completeButtonを扱うことができます。
     * console.log()で状態を確認すると分かりやすいかと思います
     */

    //完了リストに追加する要素
    //親要素を取得する
    const addTarget = completeButton.parentNode;
    //TODO内容テキストを取得！！！
    const text = addTarget.firstElementChild.innerText;
    //div以下を初期化 ←ここが良くわからない
    addTarget.textContent = null;
    //console.log(addTarget);

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);

  console.log(li);
  // alert(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
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
