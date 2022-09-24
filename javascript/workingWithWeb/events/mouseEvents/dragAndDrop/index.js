{
  /* <div id="div1" 
        ondrop="drop(event)"  
        ondragover="allowDrop(event)">
        
    </div>


    <div id="div2">
        <img id="drag1"
            src="./cat.webp" 
            width="336"
            draggable="true"
            ondragstart="drag(event)"
            height="69"
            >
    </div> */
}

function drop(event) {
  console.log(event.target);
  const sourceId = event.dataTransfer.getData('sourceId');
  console.log('sourceId->', sourceId);
  const source = document.querySelector('#' + sourceId);
  event.target.append(source);
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  // const target = document.querySelector('#div1')
  //const cat = document.querySelector('#drag1')

  console.log('id of cat-->', event.target.id);
  event.dataTransfer.setData('sourceId', event.target.id);
}
