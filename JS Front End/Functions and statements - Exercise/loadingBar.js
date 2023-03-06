function loadingBar(percent) {
    percent /= 10;
    text = "%".repeat(percent)
    dots = ".".repeat(10 - percent)
    if (text.length < 10) {
        console.log(`${percent * 10}% [${text}${dots}]`)
        console.log("Still loading...")
    }
    else {
        console.log("100% Complete!")
    }
}

loadingBar(40)