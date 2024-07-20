exports.initTooltip = (theme = "dark") => {
	const hoverItems = Array.from(document.querySelectorAll(".hoverable"));

	function applyTooltipStyles(tooltip) {
		if (theme === "light") {
			tooltip.style.background = "white";
			tooltip.style.color = "blac";
			tooltip.style.border = "1px solid black";
		} else {
			tooltip.style.background = "black";
			tooltip.style.color = "white";
		}
		tooltip.style.fontSize = "1rem";
		tooltip.style.borderRadius = "8px";
		tooltip.style.width = "fit-content";
		tooltip.style.padding = "10px";
		tooltip.style.fontFamily = "monospace";
		tooltip.style.position = "absolute";
		tooltip.style.zIndex = "2000";
		tooltip.style.maxWidth = "400px";
	}

	hoverItems.forEach((item) => {
		const tooltip = document.createElement("div");
		if (!item.dataset.tooltipTitle || item.dataset.tooltipTitle.length < 1)
			return;
		tooltip.textContent = item.dataset.tooltipTitle;
		tooltip.classList.add("tooltip");

		applyTooltipStyles(tooltip);

		item.addEventListener("mouseenter", () => {
			document.body.appendChild(tooltip);
			document.addEventListener("mousemove", moveTooltip);
		});
		item.addEventListener("mouseleave", () => {
			document.body.removeChild(tooltip);
			document.removeEventListener("mousemove", moveTooltip);
		});

		function moveTooltip(event) {
			tooltip.style.left = event.clientX + "px";
			tooltip.style.top = event.clientY + "px";
		}
	});
};
