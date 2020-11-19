const firstWords = {
	latin: ["kisal", "kak", "dlbar"],
	aramaic: [],
};

const secondWords = {
	latin: ["pasha", "hama", "mar", "asn"],
	aramaic: [],
};

export const generateNameInLatin = (withRandomNumber: boolean = true) => {
	const firstWordIndex = parseInt(String(Math.random() * firstWords.latin.length));
	const secondWordIndex = parseInt(String(Math.random() * secondWords.latin.length));
	const radomN = parseInt(String(Math.random() * 10000));

	return [
		`${firstWords.latin[firstWordIndex]}${"i"}`,
		secondWords.latin[secondWordIndex],
		withRandomNumber ? radomN : undefined,
	].join("-");
};
