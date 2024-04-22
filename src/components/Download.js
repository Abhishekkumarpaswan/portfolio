import React from "react";

export const DownloadButton = () => {
	const onButtonClick = () => {
		const pdfUrl = "Resume.pdf";
		const link = document.createElement("a");
		link.href = pdfUrl;
		link.download = "document.pdf"; // specify the filename
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
    <button onClick={onButtonClick}>Download PDF</button>
	);
};

