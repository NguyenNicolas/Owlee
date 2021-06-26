const onglets = Array.from(document.querySelectorAll(".onglets"));
const border = Array.from(document.querySelectorAll(".border"));

let index = 0;

onglets.forEach(onglet => {
	onglet.addEventListener("click", e => {
		const el = e.target;

		border[index].classList.remove("visible");

		index = onglets.indexOf(el);

		border[index].classList.add("visible");
	});
});
