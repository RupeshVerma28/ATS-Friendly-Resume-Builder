import React, { useContext } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download, FileText } from 'react-feather';
import { ResumeContext } from '../context/ResumeContext';
import exampleData from '../utils/exampleData';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Controls = ({ componentRef }) => {
    const { setResumeData } = useContext(ResumeContext);

    const handleDownloadPDF = async () => {
        const input = componentRef.current;
        if (!input) return;
        const a4WidthPx = 794;   // A4 width in pixels at 96dpi
        const a4HeightPx = 1123; // A4 height in pixels at 96dpi

        const canvas = await html2canvas(input, {
            scale: 2,
            backgroundColor: '#fff',
            width: a4WidthPx,
            height: a4HeightPx,
            windowWidth: a4WidthPx,
            windowHeight: a4HeightPx,
        });
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'pt',
            format: [a4WidthPx, a4HeightPx],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, a4WidthPx, a4HeightPx);
        pdf.save('resume.pdf');
    };

    const handlePrefill = () => {
        if (window.confirm('This will replace your current data. Are you sure?')) {
            setResumeData(exampleData);
        }
    };

    return (
        <div className="flex justify-center items-center space-x-4 my-4">
            <button
                onClick={handleDownloadPDF}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
                <Download size={18} />
                <span>Download PDF</span>
            </button>
            <button
                onClick={handlePrefill}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
                <FileText size={18} />
                <span>Prefill Example</span>
            </button>
        </div>
    );
};

export default Controls;