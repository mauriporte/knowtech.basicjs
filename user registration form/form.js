(function() {
    var Form = {
        createTooltip: function(text) {
            var rawTooltipTemplate = 
                document.getElementById("tooltipTemplate");

            var tempContainer = document.createElement("div");
            tempContainer.innerHTML = rawTooltipTemplate.textContent;

            var tooltip = tempContainer.querySelector("div");
            var tooltipText = tooltip.querySelector("span");

            tooltipText.textContent = text;

            return tooltip;
        },

        appendTooltipNextTo: function(elementSelector, text) {
            var tooltip = this.createTooltip(text);
            var element = document.querySelector(elementSelector);

            var leftPosition = element.offsetLeft;
            var elementWidth = window.getComputedStyle(element).width;
            elementWidth = elementWidth.replace("px", "");
            elementWidth = parseInt(elementWidth);

            var paddingLeft = 
                window.getComputedStyle(element).paddingLeft.replace("px", "");
            var paddingRight = 
                window.getComputedStyle(element).paddingLeft.replace("px", "");

            paddingLeft = parseInt(paddingLeft);
            paddingRight = parseInt(paddingRight);
            
            var tooltipPosition = leftPosition + elementWidth + paddingLeft + paddingRight;

            document.body.appendChild(tooltip);

            tooltip.style.left = tooltipPosition + "px";

            var topPosition = element.offsetTop;

            tooltip.style.top = topPosition + "px";
        }


    };

    document.addEventListener("DOMContentLoaded", function() {
        Form.appendTooltipNextTo("#repeatPassword", "Password doesn't match");
    });
})();