
    function updateNumbers() {
        const numbers = document.querySelectorAll('.number');
        numbers.forEach((element, index) => {
            let targetNumber;
            let sign = '';
            if (element.textContent.startsWith('#')) {
                targetNumber = 1;
            } else if (element.textContent.endsWith('+')) {
                targetNumber = parseInt(element.textContent);
                sign = '+';
            } else if (element.textContent.endsWith('%')) {
                targetNumber = parseInt(element.textContent.slice(0, -1));
                sign = '%';
            } else {
                targetNumber = parseInt(element.textContent);
            }

            const increment = Math.ceil(targetNumber / 100); 
            let currentNumber = 0;

            const interval = setInterval(() => {
                currentNumber += increment;
                element.textContent = currentNumber + sign;
                if (currentNumber >= targetNumber) {
                    clearInterval(interval);
                    element.textContent = targetNumber + sign;
                }
            }, 50); 
        });
    }

    window.addEventListener('load', updateNumbers);

// progress bar
window.addEventListener('load', function() {
 
    function updateProgress(elementId, value) {
        let progressBar = document.getElementById(elementId);
        progressBar.value = value;
        let spanId = elementId.replace('Bar', 'Value');
        document.getElementById(spanId).textContent = value + '%';
    }

    updateProgress('seoAnalysisBar', 97);
    updateProgress('excellentCodeBar', 93);
    updateProgress('contentOptimizationBar', 89);
    updateProgress('onPageOptimizationBar', 98);
    updateProgress('offPageOptimizationBar', 93);
    updateProgress('keywordResearchBar', 98);
});