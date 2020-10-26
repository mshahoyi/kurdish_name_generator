const firstWords = {
	latin: ["kisal", "kak", "jwan", "dlbar"],
	aramaic: [],
};

const secondWords = {
	latin: ["pasha", "hama", "mar", "asn"],
	aramaic: [],
};

export const generateNameInLatin = (withRandomNumber: boolean = true) => {
	const firstWordIndex = Math.random() * firstWords.latin.length;
	const secondWordIndex = Math.random() * secondWords.latin.length;
	return [
		`${firstWordIndex}${"i"}`,
		secondWordIndex,
		withRandomNumber ? Math.random() * 10000 : undefined,
	].join("-");
};
