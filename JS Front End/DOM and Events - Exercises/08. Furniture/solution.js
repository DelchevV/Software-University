function solve() {
  const btns = [...document.querySelectorAll('button')]
  let table = document.querySelector('tbody')
  btns[0].addEventListener('click', generate)
  btns[1].addEventListener('click', buy)

  function generate() {
      let input = JSON.parse(document.querySelector('textarea').value)

      function img(data) {
          let newRow = document.createElement('td')
          const img = document.createElement('img')
          img.src = data
          newRow.appendChild(img)
          return newRow
      }

      function p(data) {
          let newRow = document.createElement('td')
          const p = document.createElement('p')
          p.textContent = data
          newRow.appendChild(p)
          return newRow
      }

      for (x = 0; x < input.length; x++) {
          let newRow = document.createElement('tr')
          newRow.appendChild(img(input[x]['img']))
          newRow.appendChild(p(input[x]['name']))
          newRow.appendChild(p(input[x]['price']))
          newRow.appendChild(p(input[x]['decFactor']))
          
          let td = document.createElement('td')
          let checkbox = document.createElement('input')
          checkbox.setAttribute("type", "checkbox")
          td.appendChild(checkbox)
          newRow.appendChild(td)
          table.appendChild(newRow)
      }
  }

  function buy() {
      let rows = table.querySelectorAll('tr')

      let avrDeco = 0
      let totalSum = 0
      let names = []
      for (x = 0; x < rows.length; x++) {
          item = rows[x]
          if (item.children[4].children[0].checked) {
              names.push(item.children[1].textContent.trim())
              totalSum += parseFloat(item.children[2].textContent)
              avrDeco += parseFloat(item.children[3].textContent)
          }
      }
      if (names.length > 0) {
          document.querySelectorAll('textarea')[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${avrDeco / names.length}`
      }
  }
}


//WORKING BUT NOT FOR THE JUDGE

// function solve() {

//   const textArea = document.getElementsByTagName("textarea")[0];
//   const btns = document.getElementsByTagName("button");
//   const areaForInsert = document.getElementsByTagName('tbody')[0];
//   const generateBtn = btns[0];
//   const buyBtn = btns[1];

//   generateBtn.addEventListener('click', generate)
//   buyBtn.addEventListener('click', buy)


//   function generate() {
//     let pieceOfFurniture = JSON.parse(textArea.value);

//     let tr = document.createElement('tr');
//     for (furniture of pieceOfFurniture) {

//       tr = document.createElement('tr');

//       for (prop in furniture) {
//         let td = document.createElement("td");


//         if (prop === "img") {

//           let img = document.createElement("img");
//           img.src = furniture[prop]
//           td.append(img)
//           tr.prepend(td)

//         } else {
//           td.textContent = furniture[prop];
//           tr.append(td)
//         }

//       }

//     }
//     let checkBox = document.createElement('input')
//     checkBox.type = "checkbox";

//     let newTd = document.createElement("td");
//     newTd.append(checkBox);
//     tr.append(newTd)
//     areaForInsert.append(tr)


//   }

//   function buy() {
//     let table = document.querySelector('tbody');
//     let rows = table.querySelectorAll('tr')

//     let avrDeco = 0
//     let totalSum = 0
//     let names = []
//     for (x = 0; x < rows.length; x++) {
//       item = rows[x]
//       if (item.children[4].children[0].checked) {
//         names.push(item.children[1].textContent.trim())
//         totalSum += parseFloat(item.children[2].textContent)
//         avrDeco += parseFloat(item.children[3].textContent)
//       }
//     }
//     if (names.length > 0) {
//       document.querySelectorAll('textarea')[1].value = `Bought furniture: ${names.join(', ')}\nTotal price: ${totalSum.toFixed(2)}\nAverage decoration factor: ${avrDeco / names.length}`
//     }
//   }


// }