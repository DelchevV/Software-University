function attachGradientEvents() {
    let bar = document.getElementById("gradient")
    const result = document.getElementById("result")

    bar.addEventListener('mousemove', move)
    bar.addEventListener('mouseout', out)

    function move(e) {

        const x = e.offsetX;
        const width = bar.clientWidth
        const percentage = parseInt(x / width * 100)
        result.textContent=percentage+"%"
    }

    function out(){
        result.textContent=""
    }
}