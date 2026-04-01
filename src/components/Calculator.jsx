import { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";

export default function Calculator() {
    const [display, setDisplay] = useState('0');
    const [firstNum, setFirstNum] = useState(null);
    const [operator, setOperator] = useState(null);
    const [waitingForSecond, setWaitingForSecond] = useState(false);

    const handleNumber = (num) => {
        if (waitingForSecond) {
            setDisplay(num);
            setWaitingForSecond(false);
        } else {
            setDisplay(display === '0' ? num : display + num);
        }
    };

    const handleOperator = (op) => {
        setFirstNum(parseFloat(display));
        setOperator(op);
        setWaitingForSecond(true);
    };

    const handleEquals = () => {
        if (!operator || !firstNum === null) return;

        const second = parseFloat(display);
        const ops = {
            '+': firstNum + second,
            '-': firstNum - second,
            '×': firstNum * second,
            '÷': second !== 0 ? firstNum / second : 'Error',
        };

        setDisplay(String(ops[operator]));
        setOperator(null);
        setWaitingForSecond(false);
    };

    const handleClear = () => {
        setDisplay('0');
        setFirstNum(null);
        setOperator(null);
        setWaitingForSecond(false);
    };

    const buttons = [
        { label: 'C', variant: 'action', action: handleClear },
        { label: '+/-', variant: 'action', action: () => setDisplay(String(parseFloat(display) * -1)) },
        { label: '%', variant: 'action', action: () => setDisplay(String(parseFloat(display) / 100)) },
        { label: '÷', variant: 'operator', action: handleOperator },
        { label: '7', variant: 'number', action: handleNumber },
        { label: '8', variant: 'number', action: handleNumber },
        { label: '9', variant: 'number', action: handleNumber },
        { label: '×', variant: 'operator', action: handleOperator },
        { label: '4', variant: 'number', action: handleNumber },
        { label: '5', variant: 'number', action: handleNumber },
        { label: '6', variant: 'number', action: handleNumber },
        { label: '-', variant: 'operator', action: handleOperator },
        { label: '1', variant: 'number', action: handleNumber },
        { label: '2', variant: 'number', action: handleNumber },
        { label: '3', variant: 'number', action: handleNumber },
        { label: '+', variant: 'operator', action: handleOperator },
        { label: '0', variant: 'number', action: handleNumber, wide: true },
        { label: '.', variant: 'action', action: () => { if (!display.includes('.')) setDisplay(display + '.') } },
        { label: '=', variant: 'equals', action: handleEquals },
    ];

    return (
        <div className="bg-gray-200 rounded-3xl border-2 border-gray-300 shadow-xl p-6 w-80">
            <div className="bg-gray-50 rounded-2xl px-5 py-3 mb-4 text-right">
                <p className="text-4xl font-mono font-light text-gray-800 truncate">{display}</p>
                {operator && <p className="text-StrictMode text-indigo-400 mt-1">{firstNum} {operator}</p>}
            </div>

            <div className="grid grid-cols-4 gap-2">
                {buttons.map(({ label, variant, action, wide }) => (
                    <CalculatorBtn key={label} label={label} onClick={action} variant={variant} wide={wide} />
                ))}
            </div>
        </div>
    );
}