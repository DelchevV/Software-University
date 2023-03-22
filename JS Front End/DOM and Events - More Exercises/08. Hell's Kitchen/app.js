function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textArea = document.getElementsByTagName('textarea')[0];
   const bestRestaurant = document.querySelector('.bestRestaurant span');
   const bestWorkers = document.querySelector('workers span');
   function onClick() {
      const list = Array.from(JSON.parse(textArea.value))
      for (line of list){
         let [name, workers]= line.split(' - ')
         console.log(name)
         console.log(workers)
      }

   }
}